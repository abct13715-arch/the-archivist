import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {IS_GUEST_KEY} from '@/features/auth/models';
import {
  AuthError,
  AuthResponse,
  Session,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
  User,
} from '@supabase/supabase-js';
import * as Linking from 'expo-linking';
import {useRouter} from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

import {storage} from '@/lib/storage';
import {supabase} from '@/lib/supabase';

WebBrowser.maybeCompleteAuthSession();

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isGuest: boolean;
  isLoading: boolean;
  loginAsGuest: () => Promise<void>;
  signIn: (credentials: SignInWithPasswordCredentials) => Promise<AuthResponse>;
  signUp: (credentials: SignUpWithPasswordCredentials) => Promise<AuthResponse>;
  signOut: () => Promise<{error: AuthError | null}>;
  signInWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<{error: AuthError | null}>;
  updatePassword: (password: string) => Promise<{error: AuthError | null}>;
  resendVerificationEmail: (email: string) => Promise<{error: AuthError | null}>;
  deleteAccount: () => Promise<{error: AuthError | null}>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      // 1. Check Supabase Session
      const {
        data: {session: initialSession},
      } = await supabase.auth.getSession();

      // 2. Check local Guest Status
      const guestStatus = await storage.getItem<boolean>(IS_GUEST_KEY);

      setSession(initialSession);
      setUser(initialSession?.user ?? null);
      setIsGuest(!!guestStatus);
      setIsLoading(false);
    };

    initialize();
    // Listen for state changes
    const {data: authListener} = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);

        if (event === 'PASSWORD_RECOVERY') {
          router.push('/(auth)/reset-password');
          return;
        }

        if (session) {
          setIsGuest(false);
          await storage.deleteItem(IS_GUEST_KEY);
          if (event === 'SIGNED_IN') {
            router.replace('/');
          }
        }
      },
    );

    return () => authListener.subscription.unsubscribe();
  }, [router]);

  const loginAsGuest = useCallback(async () => {
    await storage.setItem(IS_GUEST_KEY, true);
    setIsGuest(true);
  }, []);

  const signIn = useCallback(
    async (
      credentials: SignInWithPasswordCredentials,
    ): Promise<AuthResponse> => {
      try {
        const {data, error} =
          await supabase.auth.signInWithPassword(credentials);
        if (error) throw error;
        return {data, error: null} as AuthResponse;
      } catch (error) {
        return {
          data: {user: null, session: null},
          error: error as AuthError,
        } as AuthResponse;
      }
    },
    [],
  );

  const signUp = useCallback(
    async (
      credentials: SignUpWithPasswordCredentials,
    ): Promise<AuthResponse> => {
      try {
        const {data, error} = await supabase.auth.signUp({
          ...credentials,
          options: {emailRedirectTo: 'marketplace://'},
        });
        if (error) throw error;
        return {data, error: null} as AuthResponse;
      } catch (error) {
        return {
          data: {user: null, session: null},
          error: error as AuthError,
        } as AuthResponse;
      }
    },
    [],
  );

  const signOut = useCallback(async (): Promise<{error: AuthError | null}> => {
    try {
      const {error} = await supabase.auth.signOut();
      await storage.deleteItem(IS_GUEST_KEY);
      setIsGuest(false);
      if (error) throw error;
      return {error: null};
    } catch (error) {
      return {error: error as AuthError};
    }
  }, []);

  const signInWithGoogle = useCallback(async (): Promise<void> => {
    try {
      const redirectTo = Linking.createURL('/');
      console.log('OAuth Redirect URL:', redirectTo);

      const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
          skipBrowserRedirect: true,
        },
      });

      if (error) throw error;

      if (data?.url) {
        const result = await WebBrowser.openAuthSessionAsync(
          data.url,
          redirectTo,
        );

        if (result.type === 'success') {
          const {url} = result;

          // Supabase returns tokens in the URL hash
          const parts = url.split('#');
          const hash = parts.length > 1 ? parts[1] : '';

          const params: Record<string, string> = {};
          for (const pair of hash.split('&')) {
            const [key, value] = pair.split('=');
            if (key && value) params[key] = decodeURIComponent(value);
          }

          const access_token = params.access_token;
          const refresh_token = params.refresh_token;

          if (access_token && refresh_token) {
            const {error: sessionError} = await supabase.auth.setSession({
              access_token,
              refresh_token,
            });
            if (sessionError) throw sessionError;
          }
        }
      }
    } catch (error) {
      console.error(
        'Google Sign-In failed:',
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    try {
      const {error} = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: Linking.createURL('/reset-password'),
      });
      return {error};
    } catch (error) {
      return {error: error as AuthError};
    }
  }, []);

  const updatePassword = useCallback(async (password: string) => {
    try {
      const {error} = await supabase.auth.updateUser({password});
      return {error};
    } catch (error) {
      return {error: error as AuthError};
    }
  }, []);

  const resendVerificationEmail = useCallback(async (email: string) => {
    try {
      const {error} = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: Linking.createURL('/'),
        },
      });
      return {error};
    } catch (error) {
      return {error: error as AuthError};
    }
  }, []);

  const deleteAccount = useCallback(async () => {
    try {
      const {error} = await supabase.rpc('delete_user_account');
      if (error) throw error;
      await signOut();
      return {error: null};
    } catch (error) {
      return {error: error as AuthError};
    }
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isGuest,
        isLoading,
        loginAsGuest,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        resetPassword,
        updatePassword,
        resendVerificationEmail,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

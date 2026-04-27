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

import {storage} from '@/lib/storage';
import {supabase} from '@/lib/supabase';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isGuest: boolean;
  isLoading: boolean;
  loginAsGuest: () => Promise<void>;
  signIn: (credentials: SignInWithPasswordCredentials) => Promise<AuthResponse>;
  signUp: (credentials: SignUpWithPasswordCredentials) => Promise<AuthResponse>;
  signOut: () => Promise<{error: AuthError | null}>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
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
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
        if (session) {
          setIsGuest(false);
          await storage.deleteItem(IS_GUEST_KEY);
        }
      },
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

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

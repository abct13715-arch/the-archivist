import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";
import i18next from "i18next";

type ApiResponse<T> = {
  Result: T;
  MessageCode: string;
  MessageType: string;
  MessageTime: number;
};

export const apiClient = axios.create({
  baseURL: "https://api.example.com", // TODO: Update with env variable
  timeout: 50_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

let apiToken = "";
let onLogout: (() => void) | undefined;

export const setApiToken = (newToken: string | undefined) => {
  apiToken = newToken || "";
};

export const registerLogoutHandler = (handler: () => void) => {
  onLogout = handler;
};

apiClient.interceptors.request.use(
  (config) => {
    const languageMap: Record<string, string> = {
      en: "en",
      nb: "nb",
      no: "nb",
      sv: "SV",
    };

    const currentLang = i18next.language || "en-US";
    const shortCode = currentLang.split("-")[0].toLowerCase();
    const apiLang = languageMap[shortCode] || "en";

    config.params = {
      ...config.params,
      LANGUAGE: apiLang,
    };

    if (apiToken) {
      config.headers.Authorization = `Bearer ${apiToken}`;
      console.log(
        `🚀 [apiClient] Request: ${config.method?.toUpperCase()} ${config.url}`,
      );
    } else {
      console.warn(
        `🚀 [apiClient] No Token: ${config.method?.toUpperCase()} ${config.url}`,
      );
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response && response.status === 401) {
      console.error(
        "🚀 [apiClient] Session expired or unauthorized. Logging out...",
      );
      if (onLogout) {
        onLogout();
      }
    }

    return Promise.reject(error);
  },
);

export const axiosGet = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
  rawData?: boolean,
): Promise<T> => {
  const response = await apiClient.get<ApiResponse<T>>(url, {
    params: data,
    ...config,
  });
  if (rawData) {
    return response.data as T;
  }
  return response.data?.Result;
};

export const axiosPost = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apiClient.post<ApiResponse<T>>(url, data, config);
  return response.data?.Result;
};

export const axiosPut = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apiClient.put<ApiResponse<T>>(url, data, config);
  return response.data?.Result;
};

export const axiosPatch = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apiClient.patch<ApiResponse<T>>(url, data, config);
  return response.data?.Result;
};

export const axiosDelete = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apiClient.delete<ApiResponse<T>>(url, config);
  return response.data?.Result;
};

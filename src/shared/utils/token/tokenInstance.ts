import {
  USER_REFRESH_TOKEN_KEY_LOCALSTORAGE,
  USER_TOKEN_KEY_LOCALSTORAGE,
} from "@shared/utils/constants";

export const tokenInstance = {
  setToken: (token: string) => {
    localStorage.setItem(USER_TOKEN_KEY_LOCALSTORAGE, token);
  },
  setRefreshToken: (token: string) => {
    localStorage.setItem(USER_REFRESH_TOKEN_KEY_LOCALSTORAGE, token);
  },
  getToken: () => {
    return localStorage.getItem(USER_TOKEN_KEY_LOCALSTORAGE) || "";
  },
  getRefreshToken: () => {
    return localStorage.getItem(USER_REFRESH_TOKEN_KEY_LOCALSTORAGE) || "";
  },
  clearToken: () => {
    localStorage.removeItem(USER_TOKEN_KEY_LOCALSTORAGE);
    localStorage.removeItem(USER_REFRESH_TOKEN_KEY_LOCALSTORAGE);
  },
};

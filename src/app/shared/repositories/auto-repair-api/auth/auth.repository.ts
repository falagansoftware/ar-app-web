import { httpClient } from "../../../http/http.client";
import { SignInData, SignInResponse, SignUpData, SignUpResponse } from "./auth.models";

export const autoRepairApiAuthRepository = () => {
  const apiBaseUrl = import.meta.env.VITE_AR_API_BASE_URL;

  return {
    signIn: async (signInData: SignInData): Promise<SignInResponse> => {
        return await httpClient.post(`${apiBaseUrl}/auth/sign-in`, signInData);
    },
    signUp: async (signUpData: SignUpData): Promise<SignUpResponse> => {
      return await httpClient.post(`${apiBaseUrl}/auth/sign-up`, signUpData);
    },
  }

};

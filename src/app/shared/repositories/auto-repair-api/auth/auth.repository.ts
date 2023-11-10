import { AuthProvider, SignInData, SignInResponse, SignUpData, SignUpResponse } from "../../../providers";

export const autoRepairApiAuthRepository = (): AuthProvider => {
  const apiBaseUrl = import.meta.env.VITE_AR_API_BASE_URL;

  return {
    signIn: async (signInData: SignInData): Promise<SignInResponse> => {
      const response = await fetch(`${apiBaseUrl}/auth/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInData),
      });
      return response.json();
    },

    signUp: async (signUpData: SignUpData): Promise<SignUpResponse> => {
      const response = await fetch(`${apiBaseUrl}/auth/sign-in`, {
        method: 'POST',
        body: JSON.stringify(signUpData),
      });
      return response.json();
    },
  }

};

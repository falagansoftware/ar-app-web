import { AuthProvider, SignInData, SignInResponse, SignUpData, SignUpResponse } from '@auto-repair/front';

export const autoRepairApiAuthRepository: AuthProvider = {
  signIn: async (signInData: SignInData): Promise<SignInResponse> => {
    const response = await fetch(`http://localhost:3001/auto-repair-api/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signInData),
    });
    return response.json();
  },

  signUp: async (signUpData: SignUpData): Promise<SignUpResponse> => {
    const response = await fetch(`http://localhost:3001/auto-repair-api/auth/sign-in`, {
      method: 'POST',
    });
    return response.json();
  },
};

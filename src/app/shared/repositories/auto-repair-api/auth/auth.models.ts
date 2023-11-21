export interface SignInData {
  username: string;
  password: string;
}

export interface SignUpData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken?: string;
  refreshToken?: string;
  error?: SignInError;
}

export interface SignUpResponse {
  user?: SignUpUser;
  error?: SignUpError;
}

export interface SignUpUser {
  status?: string;
}

export interface SignError {
  error: number;
  message: string;
}

export interface SignInError extends SignError {}

export interface SignUpError extends SignError {}


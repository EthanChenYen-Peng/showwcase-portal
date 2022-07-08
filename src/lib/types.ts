export interface RegisterUserPayload {
  email: string
  password: string
}

export interface RegisterResponse {
  email?: string
  error?: string
}

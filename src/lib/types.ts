import { NextApiRequest } from 'next'

export interface AuthUserPayload {
  email: string
  password: string
}

export interface AuthResponse {
  email?: string
  error?: string
}

export interface AuthApiRequest extends NextApiRequest {
  body: {
    email: string
    password: string
  }
}

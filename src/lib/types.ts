import { NextApiRequest } from 'next'

export interface RegisterUserPayload {
  email: string
  password: string
}

export interface RegisterResponse {
  email?: string
  error?: string
}

export interface AuthApiRequest extends NextApiRequest {
  body: {
    email: string
    password: string
  }
}

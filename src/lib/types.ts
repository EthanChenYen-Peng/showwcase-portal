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

export interface IUser {
  email: string
  name: string
}

export interface IAccessToken {
  id: number
  email: string
}

export interface HasError {
  error?: string
}

export interface UserApiRequest extends NextApiRequest {
  body: {
    name: string
  }
}

export interface EducationApiRequest extends NextApiRequest {
  body: {
    degree: string
    school: string
    start: string
    end: string
    grade: string
    description: string
  }
}

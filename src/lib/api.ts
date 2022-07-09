import { AuthUserPayload, AuthResponse } from './types'

export async function register(data: AuthUserPayload): Promise<AuthResponse> {
  const response = await fetch(`${window.location.origin}/api/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = (await response.json()) as AuthResponse
  if (!response.ok) {
    if (result.error) {
      throw new Error(result.error)
    } else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  }
  return result
}

export async function login(data: AuthUserPayload): Promise<AuthResponse> {
  const response = await fetch(`${window.location.origin}/api/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = (await response.json()) as AuthResponse
  if (!response.ok) {
    if (result.error) {
      throw new Error(result.error)
    } else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  }
  return result
}

export async function logout(): Promise<AuthResponse> {
  console.log('logout api')
  const response = await fetch(`${window.location.origin}/api/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = (await response.json()) as AuthResponse
  if (!response.ok) {
    if (result.error) {
      throw new Error(result.error)
    } else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  }
  return result
}

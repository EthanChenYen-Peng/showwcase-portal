import { RegisterUserPayload, RegisterResponse } from './types'

export async function register(
  data: RegisterUserPayload
): Promise<RegisterResponse> {
  const response = await fetch(`${window.location.origin}/api/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = (await response.json()) as RegisterResponse
  if (!response.ok) {
    if (result.error) {
      throw new Error(result.error)
    } else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  }
  return result
}

export async function login(
  data: RegisterUserPayload
): Promise<RegisterResponse> {
  const response = await fetch(`${window.location.origin}/api/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = (await response.json()) as RegisterResponse
  if (!response.ok) {
    if (result.error) {
      throw new Error(result.error)
    } else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  }
  return result
}

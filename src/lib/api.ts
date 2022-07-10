import { AuthUserPayload, AuthResponse, HasError } from './types'

export async function register(data: AuthUserPayload): Promise<AuthResponse> {
  return fetchWithError(`${window.location.origin}/api/register`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function login(data: AuthUserPayload): Promise<AuthResponse> {
  return fetchWithError(`${window.location.origin}/api/login`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function logout(): Promise<AuthResponse> {
  return fetchWithError(`${window.location.origin}/api/logout`)
}

export async function updateUser(data: { name: string }) {
  return fetchWithError(`${window.location.origin}/api/users`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function createEducation(data: {
  degree: string
  school: string
  start: string
  end: string
  grade: string
  description: string
}) {
  return fetchWithError(`${window.location.origin}/api/educations`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function fetchWithError(url: string, options: object = {}) {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })
  const result = (await response.json()) as HasError
  if (!response.ok) {
    if (result.error) {
      throw new Error(result.error)
    } else {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  }
  return result
}

import React, { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useMutation } from 'react-query'
import { register, login } from '@/lib/api'
import { AuthUserPayload, AuthResponse } from '@/lib/types'
import {
  Button,
  Flex,
  Stack,
  Input,
  Label,
  Box,
  Text,
} from '@/components/primitives'

interface AuthFormProps {
  mode?: 'register' | 'login'
}
function AuthForm({ mode = 'register' }: AuthFormProps) {
  const isRegisterForm = mode === 'register'
  const mutationFunction = isRegisterForm ? register : login
  const pageHeading = isRegisterForm ? 'Register' : 'Login'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutate, isLoading, error, isError } = useMutation<
    AuthResponse,
    Error,
    AuthUserPayload
  >(mutationFunction, {
    onSuccess: () => {
      window.location.replace('/')
    },
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    mutate({ email, password })
  }
  return (
    <Flex
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text as="h1" fontSize="3rem" my="2rem">
        {pageHeading}
      </Text>
      <Stack
        as="form"
        onSubmit={handleSubmit}
        minWidth={400}
        width={[0.7, 1 / 3]}
        borderRadius="10px"
        border="1px solid"
        borderColor="black"
        gap="1rem"
        padding="2rem 3rem"
      >
        <Stack gap="0.5rem">
          <Label fontWeight="500" htmlFor="email">
            Email
          </Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="yourname@example.com"
          />
        </Stack>
        <Stack gap="0.5rem">
          <Label fontWeight="500" htmlFor="password">
            Password
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="secret"
          />
        </Stack>
        <Button variant="primary" disabled={isLoading} minHeight="50px">
          {isLoading ? <ClipLoader loading={isLoading} /> : pageHeading}
        </Button>
        {isError ? <Box color="danger">{error.message}</Box> : null}
      </Stack>
    </Flex>
  )
}

export default AuthForm

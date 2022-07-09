import React, { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
} from 'styled-system'
import { register, login } from '@/lib/api'
import { AuthUserPayload, AuthResponse } from '@/lib/types'
import { useRouter } from 'next/router'
import Flex from '@/components/primitives/Flex'
import Stack from '@/components/primitives/Stack'
import Input from '@/components/primitives/Input'
import Label from '@/components/primitives/Label'
import Box from '@/components/primitives/Box'

interface AuthFormProps {
  mode?: 'register' | 'login'
}
function AuthForm({ mode = 'register' }: AuthFormProps) {
  const isRegisterForm = mode === 'register'
  const mutationFunction = isRegisterForm ? register : login
  const pageHeading = isRegisterForm ? 'Register' : 'Login'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const { mutate, isLoading, error, isError } = useMutation<
    AuthResponse,
    Error,
    AuthUserPayload
  >(mutationFunction, {
    onSuccess: async () => {
      await router.push('/')
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
      <Header fontSize="3rem" my="2rem">
        {pageHeading}
      </Header>
      <Form onSubmit={handleSubmit} minWidth={400} width={[0.7, 1 / 3]}>
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
        <SubmitBtn disabled={isLoading}>
          {isLoading ? <ClipLoader loading={isLoading} /> : pageHeading}
        </SubmitBtn>
        {isError ? <Box color="danger">{error.message}</Box> : null}
      </Form>
    </Flex>
  )
}

export default AuthForm

const SubmitBtn = styled.button`
  min-height: 50px;
  border: none;
  color: white;
  background-color: ${({ theme, disabled }) => {
    return disabled ? theme.colors.accentLight : theme.colors.accent
  }};
  transition: background-color 0.2s;
  cursor: pointer;
  margin-top: 1rem;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`

const Header = styled.h1<TypographyProps | SpaceProps>`
  ${typography}
  ${space}
`

const Form = styled.form<LayoutProps>`
  ${layout}
  border-radius: 10px;
  border: 1px solid black;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

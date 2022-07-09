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
} from 'styled-system'
import { register, login } from '@/lib/api'
import { RegisterUserPayload, RegisterResponse } from '@/lib/types'

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
    RegisterResponse,
    Error,
    RegisterUserPayload
  >(mutationFunction)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    mutate({ email, password })
  }
  return (
    <Container>
      <Header fontSize="3rem" my="2rem">
        {pageHeading}
      </Header>
      <Form onSubmit={handleSubmit} minWidth={400} width={[0.7, 1 / 3]}>
        <FormGroup>
          <Label fontWeight="500" htmlFor="email">
            Email
          </Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="yourname@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label fontWeight="500" htmlFor="password">
            Password
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="secret"
          />
        </FormGroup>
        <SubmitBtn disabled={isLoading}>
          {isLoading ? <ClipLoader loading={isLoading} /> : pageHeading}
        </SubmitBtn>

        {isError ? <div>{error.message}</div> : null}
      </Form>
    </Container>
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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Input = styled.input`
  padding: 0.5rem 1rem;
`

const Label = styled.label<TypographyProps>`
  ${typography}
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
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

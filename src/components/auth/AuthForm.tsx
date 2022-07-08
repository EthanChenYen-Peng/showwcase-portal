import React, { useState } from 'react'
import styled from 'styled-components'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'

function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const data = JSON.stringify({ email, password })
    fetch(`${window.location.origin}/api/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }
  return (
    <Container>
      <Header fontSize="3rem" my="2rem">
        Register
      </Header>
      <Form onSubmit={handleSubmit}>
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
        <SubmitBtn>Register</SubmitBtn>
      </Form>
    </Container>
  )
}

export default AuthForm

const SubmitBtn = styled.button`
  padding: 1rem;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.colors.accent};
  transition: background-color 0.2s;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
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

const Form = styled.form`
  border-radius: 10px;
  border: 1px solid black;
  width: 30%;
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

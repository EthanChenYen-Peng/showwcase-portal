import React, { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import styled from 'styled-components'
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'

function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const data = JSON.stringify({ email, password })
    setLoading(true)
    fetch(`${window.location.origin}/api/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }
  return (
    <Container>
      <Header fontSize="3rem" my="2rem">
        Register
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
        <SubmitBtn disabled={loading}>
          {loading ? <ClipLoader loading={loading} /> : 'Register'}
        </SubmitBtn>
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

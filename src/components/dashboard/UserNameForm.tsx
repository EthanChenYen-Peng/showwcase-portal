import { updateUser } from '@/lib/api'
import { FormEventHandler, useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import ClipLoader from 'react-spinners/ClipLoader'
import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  FlexboxProps,
  flexbox,
} from 'styled-system'

function UserNameForm() {
  const [name, setName] = useState('')
  const { mutate, isLoading } = useMutation(updateUser)
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    mutate({ name })
  }
  return (
    <Container>
      <Header fontSize={['1.5rem', '2rem']} marginY={'2rem'}>
        Hi there! Welcome to your education showcase
      </Header>
      <Header fontSize={['1.25rem', '1.5rem']} marginY={'1rem'}>
        Type your name and click &quot;Enter&quot; below to begin!
      </Header>
      <Form onSubmit={handleSubmit} flexDirection="column">
        <Input
          type="text"
          placeholder="Your name"
          minWidth={300}
          marginY={'1rem'}
          paddingY={'0.5rem'}
          paddingX={'1rem'}
          onChange={(e) => setName(e.target.value)}
        />
        <SubmitBtn disabled={isLoading}>
          {isLoading ? <ClipLoader loading={isLoading} /> : 'Enter'}
        </SubmitBtn>
      </Form>
    </Container>
  )
}

export default UserNameForm

const Header = styled.h2<TypographyProps | SpaceProps>`
  ${typography}
  ${space}
`

const Input = styled.input<SpaceProps | LayoutProps>`
  ${space}
  ${layout}
`

const Form = styled.form<FlexboxProps>`
  ${flexbox}
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  padding: 0 1rem;
  text-align: center;
`

const SubmitBtn = styled.button`
  min-height: 50px;
  min-width: 150px;
  border: none;
  font-size: 1.25rem;
  color: white;
  align-self: center;
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

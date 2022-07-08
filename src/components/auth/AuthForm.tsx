import styled from 'styled-components'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'

function AuthForm() {
  return (
    <Container>
      <Header fontSize="3rem" my="2rem">
        Register
      </Header>
      <Form>
        <FormGroup>
          <Label fontWeight="500" htmlFor="email">
            Email
          </Label>
          <Input type="text" placeholder="yourname@example.com" />
        </FormGroup>
        <FormGroup>
          <Label fontWeight="500" htmlFor="password">
            Password
          </Label>
          <Input type="password" placeholder="secret" />
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

import styled from 'styled-components'
import Link from 'next/link'

function PublicHeader() {
  return (
    <Header>
      <LogoContainer>Logo</LogoContainer>
      <NavContainer>
        <Link href="/login" passHref>
          <LoginLink>Login</LoginLink>
        </Link>
        <Link href="/register" passHref>
          <RegisterLink>Register</RegisterLink>
        </Link>
      </NavContainer>
    </Header>
  )
}

export default PublicHeader

const Header = styled.div`
  display: flex;
  padding: 2rem 0rem;
  width: 60%;
  margin: 0 auto;
  align-items: center;
`

const LogoContainer = styled.div``

const RegisterLink = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
`

const LoginLink = styled.a`
  list-style: none;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.75rem 1rem;
`
const NavContainer = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`

import styled from 'styled-components'
import { MdBackpack } from 'react-icons/md'
import Link from 'next/link'
import { SpaceProps, space, layout, LayoutProps } from 'styled-system'
import { IUser } from '@/lib/types'

interface Props {
  user?: IUser
}
function PublicHeader({ user }: Props) {
  return (
    <Header paddingY={'2rem'} width={['80%', '60%']}>
      <LogoContainer>
        <MdBackpack size={40} />
      </LogoContainer>
      <NavContainer>
        {user ? (
          <Link href="/logout" passHref>
            <RegisterLink>logout</RegisterLink>
          </Link>
        ) : (
          <>
            <Link href="/login" passHref>
              <LoginLink>Login</LoginLink>
            </Link>
            <Link href="/register" passHref>
              <RegisterLink>Register</RegisterLink>
            </Link>
          </>
        )}
      </NavContainer>
    </Header>
  )
}

export default PublicHeader

const Header = styled.div<SpaceProps | LayoutProps>`
  ${space}
  ${layout}
  display: flex;
  margin: 0 auto;
  align-items: center;
`

const LogoContainer = styled.div``

const RegisterLink = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`

const LoginLink = styled.a`
  list-style: none;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.ligthgray};
  }
`
const NavContainer = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`

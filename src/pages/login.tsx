import PublicHeader from '@/components/layout/PublicHeader'
import AuthForm from '@/components/auth/AuthForm'

export default function Login() {
  return (
    <>
      <PublicHeader />
      <AuthForm mode="login" />
    </>
  )
}

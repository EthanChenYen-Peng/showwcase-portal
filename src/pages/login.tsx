import AuthForm from '@/components/auth/AuthForm'
import MainLayout from '@/components/layout/MainLayout'

export default function Login() {
  return (
    <MainLayout>
      <AuthForm mode="login" />
    </MainLayout>
  )
}

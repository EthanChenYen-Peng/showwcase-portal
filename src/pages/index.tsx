import { GetServerSideProps } from 'next'
import { getUserFromToken } from '@/utils/auth'
import type { IUser } from '@/lib/types'
import MainLayout from '@/components/layout/MainLayout'

interface Props {
  user: IUser
}
function Home({ user }: Props) {
  return (
    <MainLayout user={user}>
      <p>Dashboard</p>
      {user.email}
    </MainLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies
  const token = cookies.SHOWWCASE_ACCESS_TOKEN
  let user
  if (token) {
    user = await getUserFromToken(token)
  }
  return { props: { user: { email: user?.email } } }
}

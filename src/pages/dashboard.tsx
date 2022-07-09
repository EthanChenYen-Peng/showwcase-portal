import { GetServerSideProps } from 'next'
import { getUserFromToken } from '@/utils/auth'
import type { IUser } from '@/lib/types'

interface Props {
  user: IUser
}
function Dashboard({ user }: Props) {
  return (
    <div>
      <p>Dashboard</p>
      {user.email}
    </div>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies
  const token = cookies.SHOWWCASE_ACCESS_TOKEN
  let user
  if (token) {
    user = await getUserFromToken(token)
  }
  return { props: { user: { email: user?.email } } }
}

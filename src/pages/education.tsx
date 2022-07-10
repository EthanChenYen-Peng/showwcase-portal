import { GetServerSideProps } from 'next'
import { getUserFromToken } from '@/utils/auth'
import type { IUser } from '@/lib/types'
import MainLayout from '@/components/layout/MainLayout'

interface Props {
  user: IUser
}
function Education({ user }: Props) {
  return <MainLayout user={user}>Education</MainLayout>
}

export default Education

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies
  const token = cookies.SHOWWCASE_ACCESS_TOKEN
  let user
  if (token) {
    user = await getUserFromToken(token)
  }
  if (!user?.name) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }
  return { props: { user: { email: user?.email, name: user?.name } } }
}

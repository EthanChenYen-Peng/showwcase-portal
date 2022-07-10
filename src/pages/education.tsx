import { GetServerSideProps } from 'next'
import { getUserFromToken } from '@/utils/auth'
import type { IUser } from '@/lib/types'
import MainLayout from '@/components/layout/MainLayout'
import { Text, Stack, Box, Grid, Button } from '@/components/primitives'

interface Props {
  user: IUser
}
function Education({ user }: Props) {
  const { name } = user
  return (
    <MainLayout user={user}>
      <Box width="90%" margin="0 auto">
        <Stack alignItems="center" marginY="2rem" gap="2rem">
          <Text as="h2" textAlign="center" fontSize="1.5rem">
            Welcome to {name}&apos;s education page
          </Text>
          <Button variant="primary" padding="1rem" fontSize="1.1rem">
            Add new education
          </Button>
        </Stack>
        <Grid gridTemplateColumns="repeat(12, 1fr)" gridGap="2rem">
          <Box gridColumn="span 3" bg="lightgray">
            asdf
          </Box>
          <Box gridColumn="span 7" bg="lightgray"></Box>
        </Grid>
      </Box>
    </MainLayout>
  )
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

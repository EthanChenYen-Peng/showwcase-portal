import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { getUserFromToken } from '@/utils/auth'
import type { IUser } from '@/lib/types'
import MainLayout from '@/components/layout/MainLayout'
import { Text, Stack, Box, Grid, Button } from '@/components/primitives'
import Modal from '@/components/utils/Modal'
import EducationForm from '@/components/education/EducationForm'
import { fetchEducations } from '@/lib/api'
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'
import EducationList from '@/components/education/EducationList'
import { IEducation } from '@/lib/types'

interface Props {
  user: IUser
}

interface Response {
  educations: IEducation[]
}
function Education({ user }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const { name } = user
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const { isLoading, isSuccess, data } = useQuery(
    ['educations'],
    fetchEducations<Response>
  )
  return (
    <MainLayout user={user}>
      <Box width="90%" margin="0 auto">
        <Stack alignItems="center" marginY="2rem" gap="2rem">
          <Text as="h2" textAlign="center" fontSize="1.5rem">
            Welcome to {name}&apos;s education page
          </Text>
          <Button
            variant="primary"
            padding="1rem"
            fontSize="1.1rem"
            onClick={openModal}
          >
            Add new education
          </Button>
          <Modal isOpen={modalIsOpen} close={closeModal}>
            <EducationForm />
          </Modal>
        </Stack>
        <Grid gridTemplateColumns="repeat(12, 1fr)" gridGap="2rem">
          <Box gridColumn="span 3" bg="lightgray">
            asdf
          </Box>
          <Box gridColumn="span 7" bg="lightgray">
            <ClipLoader loading={isLoading} />
            {isSuccess && <EducationList educations={data?.educations} />}
          </Box>
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

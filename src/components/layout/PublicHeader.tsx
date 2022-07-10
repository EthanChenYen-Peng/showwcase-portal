import { MdBackpack } from 'react-icons/md'
import Link from 'next/link'
import { useMutation } from 'react-query'
import { logout } from '@/lib/api'
import { useRouter } from 'next/router'
import type { IUser } from '@/lib/types'
import { Button, Flex, Box } from '@/components/primitives'

interface Props {
  user?: IUser
}
function PublicHeader({ user }: Props) {
  const router = useRouter()
  const { mutate } = useMutation(logout, {
    onSuccess: async () => {
      await router.push('/login')
    },
  })

  const handleLogout = () => {
    mutate()
  }
  return (
    <Flex
      margin="0 auto"
      alignItems="center"
      paddingY={'2rem'}
      width={['80%', '60%']}
    >
      <Box>
        <Link href="/">
          <a>
            <MdBackpack size={40} />
          </a>
        </Link>
      </Box>
      <Flex marginLeft="auto" alignItems="center" gap="2rem">
        {user ? (
          <Button
            variant="primary"
            padding="0.75rem 1rem"
            borderRadius="0.5rem"
            fontSize="1rem"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <>
            <Link href="/login" passHref>
              <Button
                as="a"
                variant="secondary"
                padding="0.75rem 1rem"
                borderRadius="0.5rem"
              >
                Login
              </Button>
            </Link>
            <Link href="/register" passHref>
              <Button
                as="a"
                variant="primary"
                padding="0.75rem 1rem"
                borderRadius="0.5rem"
              >
                Register
              </Button>
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default PublicHeader

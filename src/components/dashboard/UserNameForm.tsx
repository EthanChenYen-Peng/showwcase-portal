import { useRouter } from 'next/router'
import { updateUser } from '@/lib/api'
import { FormEventHandler, useState } from 'react'
import { useMutation } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'
import { Stack, Text, Input, Button } from '@/components/primitives'

function UserNameForm() {
  const [name, setName] = useState('')
  const router = useRouter()
  const { mutate, isLoading } = useMutation(updateUser, {
    onSuccess: async () => {
      await router.push('/education')
    },
  })
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    mutate({ name })
  }
  return (
    <Stack
      height="80%"
      padding="0 1rem"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        as="h2"
        textAlign="center"
        fontSize={['1.5rem', '2rem']}
        marginY={'2rem'}
      >
        Hi there! Welcome to your education showcase
      </Text>
      <Text
        as="h2"
        textAlign="center"
        fontSize={['1.25rem', '1.5rem']}
        marginY={'1rem'}
      >
        Type your name and click &quot;Enter&quot; below to begin!
      </Text>
      <Stack as="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your name"
          minWidth={300}
          marginY={'1rem'}
          paddingY={'0.5rem'}
          paddingX={'1rem'}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="primary"
          minHeight="50px"
          fontSize="1.25rem"
          width="120px"
          alignSelf="center"
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader loading={isLoading} /> : 'Enter'}
        </Button>
      </Stack>
    </Stack>
  )
}

export default UserNameForm

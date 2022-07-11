import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useMutation, useQueryClient } from 'react-query'
import { Text, Input, Stack, Box, Button } from '@/components/primitives'
import { createEducation } from '@/lib/api'
import SchoolSelect from '@/components/education/SchoolSelect'

interface Props {
  afterSubmitSuecess: () => void
}

function EducationForm({ afterSubmitSuecess }: Props) {
  const [degree, setDegree] = useState('')
  const [school, setSchool] = useState('sydney')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [grade, setGrade] = useState('')
  const [description, setDescription] = useState('')

  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(createEducation, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['educations'])
      afterSubmitSuecess()
    },
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    mutate({ degree, school, start, end, grade, description })
  }
  return (
    <Box>
      <Box borderBottom="1px solid lightgray " paddingY="1rem">
        <Text as="h1" fontSize="1.5rem">
          Credentials
        </Text>
      </Box>
      <Stack
        as="form"
        width={['80%', '50%']}
        marginX="auto"
        paddingY="2rem"
        gap="1.2rem"
        onSubmit={handleSubmit}
      >
        <Stack>
          <Text as="label" htmlFor="degree" fontWeight="500">
            Degree
          </Text>
          <Input
            required
            type="text"
            id="degree"
            placeholder="Eg. Bachelor of Computer Science"
            marginY={'0.5rem'}
            padding="0.5rem 1rem"
            onChange={(e) => setDegree(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text as="label" htmlFor="school" fontWeight="500">
            School
          </Text>
          <SchoolSelect school={school} setSchool={setSchool} />
        </Stack>
        <Stack>
          <Text as="label" htmlFor="start" fontWeight="500">
            Start Year
          </Text>
          <Input
            required
            type="month"
            id="start"
            marginY={'0.5rem'}
            padding="0.5rem 1rem"
            max={end}
            onChange={(e) => setStart(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text as="label" htmlFor="end" fontWeight="500">
            End Year
          </Text>
          <Input
            required
            type="month"
            id="end"
            marginY={'0.5rem'}
            padding="0.5rem 1rem"
            min={start}
            onChange={(e) => setEnd(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text as="label" htmlFor="grade" fontWeight="500">
            Grade
          </Text>
          <Input
            required
            type="text"
            id="grade"
            placeholder="Eg. H1, Distinction"
            marginY={'0.5rem'}
            padding="0.5rem 1rem"
            onChange={(e) => setGrade(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text
            as="label"
            htmlFor="description"
            fontWeight="500"
            marginBottom="0.5rem"
          >
            Description
          </Text>
          <textarea
            required
            id="description"
            name="description"
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </Stack>
        <Button
          variant="primary"
          disabled={isLoading}
          padding="1rem"
          fontSize="1.25rem"
        >
          {isLoading ? <ClipLoader loading={isLoading} /> : 'Save'}
        </Button>
      </Stack>
    </Box>
  )
}

export default EducationForm

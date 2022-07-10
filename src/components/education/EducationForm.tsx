import { useState } from 'react'
import { Text, Input, Stack, Box, Button } from '@/components/primitives'
function EducationForm() {
  const [degree, setDegree] = useState('')
  const [school, setSchool] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [grade, setGrade] = useState('')
  const [description, setDescription] = useState('')
  return (
    <Box>
      <Box borderBottom="1px solid lightgray " paddingY="1rem">
        <Text as="h1" fontSize="1.5rem">
          Credentials
        </Text>
      </Box>

      <Stack as="form" width="50%" marginX="auto" paddingY="2rem" gap="1.2rem">
        <Stack>
          <Text as="label" htmlFor="degree" fontWeight="500">
            Degree
          </Text>
          <Input
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
          <Input
            type="text"
            id="school"
            placeholder="Eg. University of Sydney"
            marginY={'0.5rem'}
            padding="0.5rem 1rem"
            onChange={(e) => setSchool(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text as="label" htmlFor="start" fontWeight="500">
            Start Year
          </Text>
          <Input
            type="month"
            id="start"
            marginY={'0.5rem'}
            padding="0.5rem 1rem"
            onChange={(e) => setStart(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text as="label" htmlFor="end" fontWeight="500">
            End Year
          </Text>
          <Input
            type="month"
            id="end"
            marginY={'0.5rem'}
            padding="0.5rem 1rem"
            onChange={(e) => setEnd(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text as="label" htmlFor="grade" fontWeight="500">
            Grade
          </Text>
          <Input
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
            id="description"
            name="description"
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </Stack>
        <Button variant="primary" padding="1rem" fontSize="1.25rem">
          Save
        </Button>
      </Stack>
    </Box>
  )
}

export default EducationForm

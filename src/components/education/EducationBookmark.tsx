import { IEducation } from '@/lib/types'
import { Stack, Text } from '@/components/primitives'

interface Props {
  educations: IEducation[]
}

function BookMark({ educations }: Props) {
  const hasRecords = educations.length > 0

  const educationsRecords = educations.map((education) => {
    return (
      <Text key={education.id} fontWeight="500" fontSize="1.25rem">
        {education.school}
      </Text>
    )
  })
  return (
    <Stack
      gap="2rem"
      border="1px solid lightgray"
      padding="1rem"
      borderRadius="0.5rem"
      boxShadow="6px 15px 15px -7px rgba(0,0,0,0.1);"
    >
      {hasRecords ? educationsRecords : 'No bookmark yet'}
    </Stack>
  )
}

export default BookMark

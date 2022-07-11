import { IEducation } from '@/lib/types'
import { Stack, Text } from '@/components/primitives'

interface Props {
  educations: IEducation[]
}

function BookMark({ educations }: Props) {
  console.log({ educations })
  return (
    <Stack gap="2rem">
      {educations.map((education) => {
        return (
          <Text key={education.id} fontWeight="500" fontSize="1.25rem">
            {education.school}
          </Text>
        )
      })}
    </Stack>
  )
}

export default BookMark

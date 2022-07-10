import { IEducation } from '@/lib/types'
import { Stack, Text } from '@/components/primitives'

interface Props {
  education: IEducation
}
function EducationItem({ education }: Props) {
  const { school, degree } = education
  console.log(education)
  return (
    <Stack gap="1rem">
      <Text as="h3" fontSize="1.5rem">
        {degree} @ {school}
      </Text>
    </Stack>
  )
}

export default EducationItem

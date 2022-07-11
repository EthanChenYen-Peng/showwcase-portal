import { IEducation } from '@/lib/types'
import { Stack, Text } from '@/components/primitives'
import EducationItem from './EducationItem'

interface Props {
  educations: IEducation[]
}
function EducationList({ educations }: Props) {
  const sortedEducations = educations.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  const hasRecords = educations.length > 0
  const educationItems = sortedEducations.map((education) => (
    <EducationItem key={education.id} education={education} />
  ))
  return (
    <Stack gap="2rem" alignSelf="stretch">
      {hasRecords ? (
        educationItems
      ) : (
        <Text as="h2" fontSize="1.5rem" marginTop="1rem" textAlign="center">
          No record found!
        </Text>
      )}
    </Stack>
  )
}

export default EducationList

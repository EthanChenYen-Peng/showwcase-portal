import { IEducation } from '@/lib/types'
import { Box, Stack } from '@/components/primitives'
import EducationItem from './EducationItem'

interface Props {
  educations: IEducation[]
}
function EducationList({ educations }: Props) {
  const sortedEducations = educations.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
  return (
    <Stack gap="2rem">
      {sortedEducations.map((education) => (
        <EducationItem key={education.id} education={education} />
      ))}
    </Stack>
  )
}

export default EducationList

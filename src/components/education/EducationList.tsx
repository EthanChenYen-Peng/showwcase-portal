import { IEducation } from '@/lib/types'
import { Box, Stack } from '@/components/primitives'
import EducationItem from './EducationItem'

interface Props {
  educations: IEducation[]
}
function EducationList({ educations }: Props) {
  return (
    <Stack gap="2rem">
      {educations.map((education) => (
        <EducationItem key={education.id} education={education} />
      ))}
    </Stack>
  )
}

export default EducationList

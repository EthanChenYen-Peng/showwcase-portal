import { IEducation } from '@/lib/types'
import { Stack, Text } from '@/components/primitives'
import moment from 'moment'

interface Props {
  education: IEducation
}
function EducationItem({ education }: Props) {
  const { school, degree, startYear, endYear, grade, description } = education

  const formatYear = (dateTime: string) => moment(dateTime).format('MMMM YYYY')
  return (
    <Stack gap="1rem">
      <Text as="h3" fontSize="1.5rem">
        {degree} @ {school}
      </Text>
      <Text>
        {formatYear(startYear)} - {formatYear(endYear)}
      </Text>
      <Text>Grade: {grade}</Text>
      <Text>{description}</Text>
    </Stack>
  )
}

export default EducationItem

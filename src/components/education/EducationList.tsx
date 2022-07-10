import { IEducation } from '@/lib/types'

interface Props {
  educations: IEducation[]
}
function EducationList({ educations }: Props) {
  return (
    <div>
      {educations.map((education) => (
        <div key={education.id}>{education.school}</div>
      ))}
    </div>
  )
}

export default EducationList

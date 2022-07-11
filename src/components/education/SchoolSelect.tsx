import AsyncSelect from 'react-select/async'
import { fetchSchools } from '@/lib/api'
interface ISchool {
  name: string
}
interface Props {
  school: string
  setSchool: (name: string) => void
}

function SchoolSelect({ setSchool }: Props) {
  return (
    <AsyncSelect
      placeholder="Eg. University of Sydney"
      onChange={(selected: { value: string } | null) => {
        if (selected?.value) {
          setSchool(selected.value)
        }
      }}
      loadOptions={(inputText, callback) => {
        fetchSchools<{ schools: ISchool[] }>(inputText).then((response) => {
          const data = response.schools.map((school) => {
            return {
              value: school.name,
              label: school.name,
            }
          })
          callback(data)
        })
      }}
    />
  )
}

export default SchoolSelect

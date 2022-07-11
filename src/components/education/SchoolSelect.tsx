import AsyncSelect from 'react-select/async'
import { fetchSchools } from '@/lib/api'
import { debounce } from 'lodash'
interface ISchool {
  name: string
}
interface Props {
  school: string
  setSchool: (name: string) => void
}

interface SchoolOption {
  value: string
  label: string
}

function fetchSchoolsWithcalls(
  inputText: string,
  callback: (data: SchoolOption[]) => void
) {
  fetchSchools<{ schools: ISchool[] }>(inputText).then((response) => {
    const data = response.schools.map((school) => {
      return {
        value: school.name,
        label: school.name,
      }
    })
    callback(data)
  })
}
const debouncedFetchSchoolWithCallback = debounce(fetchSchoolsWithcalls, 500)

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
        debouncedFetchSchoolWithCallback(inputText, callback)
      }}
    />
  )
}

export default SchoolSelect

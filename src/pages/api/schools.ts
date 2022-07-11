import { NextApiResponse } from 'next'
import { SchoolApiRequest } from '@/lib/types'
import { fetchWithError } from '@/lib/api'

const UNIVERSITY_SEACH_API = 'http://universities.hipolabs.com'

export default async function schools(
  req: SchoolApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { name } = req.query as { name: string }
    const schools = await fetchWithError(
      `${UNIVERSITY_SEACH_API}/search?name=${name}`
    )
    res.json({ schools })
  }
}

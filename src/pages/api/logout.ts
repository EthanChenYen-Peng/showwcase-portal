import { NextApiRequest, NextApiResponse } from 'next'

const logout = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    'SHOWWCASE_ACCESS_TOKEN=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  )
  res.status(200)
  res.json({})
}

export default logout

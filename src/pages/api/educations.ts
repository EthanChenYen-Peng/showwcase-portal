import { NextApiResponse } from 'next'
import { getUserIdFromToken } from '@/utils/auth'
import prisma from '@/lib/prisma'
import { EducationApiRequest } from '@/lib/types'

export default async function educations(
  req: EducationApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.SHOWWCASE_ACCESS_TOKEN
  if (req.method === 'POST') {
    if (token) {
      const id = getUserIdFromToken(token)
      const record = await createEducation(req, id)
      res.json({ education: { school: record?.school } })
    }
  } else if (req.method === 'GET') {
    if (token) {
      const id = getUserIdFromToken(token)
      const records = await prisma.education.findMany({
        where: {
          userId: id,
        },
        select: {
          degree: true,
          school: true,
          id: true,
          startYear: true,
          endYear: true,
        },
      })
      res.json({ educations: records })
    }
  }
}

async function createEducation(req: EducationApiRequest, id: number) {
  const { degree, school, start, end, grade, description } = req.body
  return await prisma.education.create({
    data: {
      degree,
      school,
      startYear: new Date(start),
      endYear: new Date(end),
      grade,
      description,
      user: {
        connect: { id },
      },
    },
  })
}

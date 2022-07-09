import { IUser } from '@/lib/types'
import React from 'react'
import PublicHeader from './PublicHeader'

interface Props {
  children: React.ReactNode
  user?: IUser
}
function MainLayout({ children, user }: Props) {
  return (
    <>
      <PublicHeader user={user} />
      {children}
    </>
  )
}

export default MainLayout

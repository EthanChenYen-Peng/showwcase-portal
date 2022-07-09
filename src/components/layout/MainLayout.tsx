import React from 'react'
import PublicHeader from './PublicHeader'

interface Props {
  children: React.ReactNode
}
function MainLayout({ children }: Props) {
  return (
    <>
      <PublicHeader />
      {children}
    </>
  )
}

export default MainLayout

import React from 'react'
import Navbar from "@/app/shared/widgets/Navbar";

export default function layout({children} : {children: React.ReactNode}) {
  return (
    <>
      <Navbar isHome={false}></Navbar>
      <div>{children}</div>
    </>
  )
}

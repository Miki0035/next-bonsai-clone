import { Navbar } from '@/components'
import React from 'react'

const page = () => {
  return (
    <header className='relative lg:top-0 lg:sticky w-full px-2 py-4 bg-whiteBackground border border-2 border-greenBackground'>
      <Navbar />
    </header>
  )
}

export default page
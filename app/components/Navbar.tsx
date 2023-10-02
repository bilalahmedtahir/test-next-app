import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/tickets">About</Link>
        <Link href="/">News</Link>
      </nav>
  )
}

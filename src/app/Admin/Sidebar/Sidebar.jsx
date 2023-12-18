import Link from 'next/link'
import React from 'react'

export const Sidebar = () => {
  return (
    <div className='sidebar fixed left-0 top-0'>
        <div className="flex flex-col py-5 px-4">
            <div className="logo">Logo</div>
            <ul className="flex flex-col">
                <li><Link href="/projects">Projects</Link></li>
            </ul>
        </div>
    </div>
  )
}

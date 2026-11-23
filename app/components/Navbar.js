import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='h-18 bg-purple-700 flex justify-between items-center text-white px-3'>
        <div className='logo font-bold text-lg'>
          <Link href='/'><li>BitLinks</li> </Link> 
        </div>
    <ul className='flex justify-center gap-4 items-center'>
        <Link href='/'> <li>Home</li> </Link>
        <Link href='/about'> <li>About</li> </Link>
        <Link href='/shorten'> <li>Shortener</li> </Link>
        <Link href='/contact'> <li>Contact Us</li> </Link>
        <li className ='flex gap-2'>
            <Link href='/shorten'><button className='cursor-pointer bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button> </Link>
           <Link href='/github'> <button className='cursor-pointer bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button> </Link>
        </li>
    </ul>
    </nav>
  )
}

export default Navbar
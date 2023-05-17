import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/tv.png" width={60} height={20}/>
            <div>
                <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Haber</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Belgesel</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Çizgi Film</li>
                </Link>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar
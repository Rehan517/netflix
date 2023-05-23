import React from 'react'
import {BellIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid"
import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() =>{
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll',handleScroll)

        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

  return (
    <div>
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      
      <div className='flex items-center space-x-2 md:space-x-10'>
      <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className='hidden space-x-4 md:flex'>
            <li className='headerLinks'>Home</li>
            <li className='headerLinks'>TV Shows</li>
            <li className='headerLinks'>Movies</li>
            <li className='headerLinks'>New & Popular</li>
            <li className='headerLinks'>My List</li>
        </ul>
      </div>


      <div className='flex items-center space-x-4 text-sm font-light'>
        <MagnifyingGlassIcon className='hidden h-6 w-6 sm:inline text-[white]'/>
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6  text-[white]'/>
        <Link href={"/account"}>
            <img src="https://rb.gy/g1pwyx" alt="" className='cursor-pointer rounded'/>
        </Link>
      </div>
    </header>
    </div>
  )
}

"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from './ui/separator'

import { Menu } from 'lucide-react'

const NavItem = [
  {
  name: "Home",
  link: "/",
  },
  {
  name: "About Us",
  link: "#about-us",
  },
  {
  name: "Site",
  link: "/site",
  },
  {
  name: "News",
  link: "/News",
  },
  {
  name: "Career",
  link: "/career",
  },
  {
  name: "Contact Us",
  link: "/contact-us",
  },
]

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>

    {/* Desktop Navbar */}
    <div className='hidden md:flex bg-white text-slate-700 w-full h-16 shadow-md z-40'>
        <Image src="/Logo.png" alt="Logo" width={135} height={24} className='ml-16 p-2' />
        <div className='flex ml-auto mr-auto gap-6 items-center justify-center'>
            {NavItem.map((item) => (
                <Link href={item.link} key={item.name} className={`flex justify-center items-center h-full text-sm ${isActive ? 'font-regular' : 'font-regular'}`}>
                    {item.name}
                </Link>
            ))}
        </div>
    </div>

    {/* Mobile Navbar */}
    <div className='flex md:hidden bg-white text-black w-full h-16 shadow-md z-40'>
      <Image src="/Logo.png" alt="Logo" width={135} height={24} className='ml-3 p-2' />
      <Sheet>
        <SheetTrigger className='ml-auto mr-3 p-2'>
          <Menu color={"black"} size={"30"} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className='justify-center items-center p-2'>
              <Image src="/Logo.png" alt="Logo" width={135} height={24}  />
            </SheetTitle>
          </SheetHeader>
          <Separator className='my-3' />
          <div className='flex flex-col items-center justify-center mt-auto mb-5 gap-7 p-2'>
            {NavItem.map((item) => (
              <Link href={item.link} key={item.name} className={`flex justify-center items-center h-full text-sm ${isActive ? 'font-regular' : 'font-regular'}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
    </>
  )
}

export default Navbar
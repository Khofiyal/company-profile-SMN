import React from 'react'
import Image from 'next/image'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Menu } from 'lucide-react'

const MobileNav = () => {
  return (
    <>
    <div className='flex md:hidden bg-white text-slate-700 w-full h-16 shadow-md z-40'>
            <Image src="/Logo.png" alt="Logo" width={135} height={24} className='ml-3 p-2' />
            <Sheet>
            <SheetTrigger className='ml-auto mr-3 p-2'>
                <Menu color={"black"} size={"30"} />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
    </div>
    </>
  )
}

export default MobileNav
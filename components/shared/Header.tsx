// "use client"
import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { AlignLeftIcon, AlignRightIcon, HeartIcon, LogInIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NavLinks from './NavLinks'
import { DashboardIcon } from '@radix-ui/react-icons'


const Navbar = () => {  
  return (
    <nav className="container mx-auto px-4 lg:px-20 py-2 md:py-6 flex items-center justify-between border-b md:flex-row md:items-center">
      <div className="flex items-center">
        {/* SIDEBAR FOR MOBILE DEVICES  */}
        <Sheet>
          <SheetTrigger>
            <div className="md:hidden rounded-md p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white">
                <AlignLeftIcon/>
            </div>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <p className="text-lg italic">CraftMyResume<span className="text-orange-500 font-bold text-3xl">.</span></p>
              </SheetTitle>
            </SheetHeader>
            <NavLinks/>
          </SheetContent>
          </SheetTrigger>
        </Sheet>
        <h5 className="text-lg font-bold md:ml-4">
            <p className="text-lg italic">CraftMyResume<span className="text-orange-500 font-bold text-3xl">.</span></p>
        </h5>
      </div>

      <div className="hidden md:block">
        <NavLinks />
      </div>

      <div className="flex items-center space-x-2">

        <SignedIn>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className='border-orange-500 text-orange-500'>
              <Link href={`/dashboard`} className="flex items-center">
                Dashboard <DashboardIcon className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <Button variant="outline" className='border-orange-500 text-orange-500'>
            <Link href={`/sign-in`} className="flex items-center">
              Build My Resume <LogInIcon className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </SignedOut>
      </div>

    </nav>

  )
}

export default Navbar
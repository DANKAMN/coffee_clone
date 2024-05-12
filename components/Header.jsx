"use client";

import { Flame, Search, X } from "lucide-react"
import Image from 'next/image'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { useEffect, useState } from "react"

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldShowNavbar = prevScrollPos > currentScrollPos || currentScrollPos === 0;
      
      setIsSticky(shouldShowNavbar);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <div className={`${isSticky ? 'sticky top-0 z-50 bg-white shadow-md' : ''}`}>
      <div className="px-4 pt-4 pb-10 flex justify-between items-center">
          <div className="lg:hidden">
              <MobileNav />
          </div>
          
          <div className="hidden lg:block">
              <DesktopNav />
          </div>

          <div className="hidden lg:block">
              <a href="#">
                  <Image 
                      src="/assets/buymeacoffee.svg"
                      width={175}
                      height={30}
                      alt="buy me a coffee"
                  />
              </a>
          </div>

          <div className="flex justify-between items-center gap-1">
              <AlertDialog>
                <AlertDialogTrigger>
                <div className="flex hidden xl:block bg-black/[3%] rounded-full items-center justify-between px-4 py-2 w-64 ease-in-out duration-300">
                              <div className="flex items-center gap-3 text-gray-400">
                                  <Search color ="#9ca3af" />
                                  Search creators
                              </div>
                          </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                    <form className="hidden lg:flex bg-black/[3%] items-start justify-start px-4 py-4 w-full ease-in-out duration-300">
                      <div className="flex items-center gap-3 text-sm font-normal">
                          <Search color="#9ca3af" />
                          <input type="text" className="text-gray-400 bg-transparent" placeholder="Search creators" />
                      </div>
                    </form>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="flex px-4 gap-2 flex-row justify-start items-start">
                        <Flame size={20} color="#AE6518" />
                        <p>Trending</p>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                  <AlertDialogCancel className="absolute top-0 right-0 -mt-8 mr-[-4rem]">
                    <X size={32} color="#ffffff" />
                  </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <a href="#" className="flex hover:bg-black/5 hover:rounded-full items-center text-lg max-sm:text-sm font-medium px-8 max-sm:px-4  py-2 ease-in-out duration-300">Login</a>
              <a href="#" className="flex bg-[rgb(255,221,0)] rounded-full items-center text-lg max-sm:text-sm px-8 max-sm:px-4  py-2 text-lg font-medium hover:scale-125 ease-in-out duration-300">Sign up</a>
          </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Apple, Bot, Heart, Menu } from 'lucide-react'
import Image from 'next/image'



const MobileNav = () => {
  return (
    <div className="w-full">
      <Sheet key="left">
        <SheetTrigger className='flex flex-row'>
          <Menu color="#000000" />
          <Image 
          src="/assets/coffee.svg"
          width={22}
          height={32}
          alt='coffee'
          className='disabled'
        />
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="w-full h-screen"
          style={{
            width: "100%",
          }}
        >
          <SheetHeader>
            <SheetTitle>
            
            </SheetTitle>
            <SheetDescription>
            <div className="mt-7 absolute left-[-0.8rem] w-full text-black">
              <div className="flex flex-col justify-between items-start gap-1 absolute left-4">
                <a href="#" className="flex hover:bg-black/5 hover:rounded-full items-center text-lg font-medium px-8 py-2 ease-in-out duration-300">
                  FAQ
                </a>
      
                <a href="#" className="flex hover:bg-black/5 hover:rounded-full items-center text-lg font-medium px-8 py-2 ease-in-out duration-300">
                  Wall of &nbsp; <Heart />
                </a>

                <a href="#" className="flex hover:bg-black/5 hover:rounded-full items-center text-lg font-medium px-8 py-2 ease-in-out duration-300">
                  Help Center
                </a>

                <div className="flex text-lg hover:bg-black/5 hover:rounded-full justify-center items-center flex-row gap-1 font-medium px-8 py-2 ease-in-out duration-300">
                  <Apple />
                  <p>ios</p>
                </div>

                <div className="flex text-lg hover:bg-black/5 hover:rounded-full justify-center items-center flex-row gap-1 font-medium px-8 py-2 ease-in-out duration-300">
                  <Bot />
                  <p>Android</p>
                </div>
              </div>

            </div>
              <div className="left-0 absolute bottom-6 w-full flex justify-center items-center px-4 ">
                <a href="#" className="text-center w-full text-black bg-[rgb(255,221,0)] rounded-full items-center text-lg px-8 py-2 text-lg font-medium hover:scale-125 ease-in-out duration-300">Start my page</a>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileNav
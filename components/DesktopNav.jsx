import { Apple, Bot, Heart, MessageCircleQuestion } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const DesktopNav = () => {
  return (
    <div className="flex justify-between items-center gap-1">
      <a href="#" className="flex hover:bg-black/5 hover:rounded-full items-center text-lg font-medium px-8 py-2 ease-in-out duration-300">FAQ</a>
      
      <a href="#" className="flex hover:bg-black/5 hover:rounded-full items-center text-lg font-medium px-8 py-2 ease-in-out duration-300">
        Wall of &nbsp; <Heart />
      </a>

      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none focus:border-none'>
          <div className="flex hover:bg-black/5 hover:rounded-full border-none outline-none items-center text-lg font-medium px-8 py-2 ease-in-out duration-300">
            Resources 
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="flex justify-center items-center flex-row gap-1">
              <MessageCircleQuestion />
              <p>Help Center</p>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <div className="flex justify-center items-center flex-row gap-1">
              <Apple />
              <p>ios</p>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <div className="flex justify-center items-center flex-row gap-1">
              <Bot />
              <p>Android</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default DesktopNav
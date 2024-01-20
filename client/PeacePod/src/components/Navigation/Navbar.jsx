import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Music, Palmtree, MessageSquareHeart, UsersRound, X, HeartPulse } from 'lucide-react'
import { Transition, Dialog } from '@headlessui/react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='flex min-h-screen'>

    {/* for desktop */}
    <aside className="hidden md:flex h-screen w-64 flex-col overflow-y-auto border-r bg-gradient-to-br to-[#386991] from-[#2C2E44] from-50% to-90% px-5 py-8 shadow-2xl roboto">
      {/* div that shows logo */}
      <div className='text-3xl font-bold text-white'>
        <span>PEACE POD</span>
        {/* logo */}
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-6 ">
            <NavLink 
            to='/'
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
            >
              <Home className="h-6 w-6 hover:h-7 hover:w-7" aria-hidden="true" />
              <span className="mx-2 text-base font-bold">Home</span>
            </NavLink>

            <NavLink 
            to='/music'
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
            >
              <Music className="h-6 w-6 hover:h-7 hover:w-7" aria-hidden="true" />
              <span className="mx-2 text-base font-bold">Music</span>
            </NavLink>

            <NavLink 
            to='/scene'
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
            >
              <Palmtree className="h-6 w-6 hover:h-7 hover:w-7" aria-hidden="true" />
              <span className="mx-2 text-base font-bold">Scene</span>
            </NavLink>

            <NavLink 
            to='/relaxandbreathe'
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
            >
              <HeartPulse className="h-6 w-6 hover:h-7 hover:w-7" aria-hidden="true" />
              <span className="mx-2 text-base font-bold">Relax and Breathe</span>
            </NavLink>

            <NavLink 
            to='/aboutus'
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
            >
              <UsersRound className="h-6 w-6 hover:h-7 hover:w-7" aria-hidden="true" />
              <span className="mx-2 text-base font-bold">About Us</span>
            </NavLink>

            <NavLink 
            to='/talktohope'
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
            >
              <MessageSquareHeart className="h-6 w-6 hover:h-7 hover:w-7" aria-hidden="true" />
              <span className="mx-2 text-base font-bold">Talk To Hope</span>
            </NavLink>
          </div> 
        </nav>
      </div>
    </aside>

    </div>
  )
}

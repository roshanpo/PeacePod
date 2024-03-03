import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  Home,
  Music,
  Palmtree,
  MessageSquareHeart,
  UsersRound,
  X,
  HeartPulse,
} from "lucide-react"
import { Transition, Dialog } from "@headlessui/react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      {/* for desktop */}
      <aside className=" z-50 hidden md:flex h-screen w-72 flex-col overflow-y-auto border-r-transparent bg-gradient-to-br to-[#386991] from-[#2C2E44] from-50% to-90% px-5 py-8 shadow-2xl roboto min-h-screen">
        {/* div that shows logo */}
        <div className="text-3xl font-bold text-white px-4 py-4">
          <NavLink to="/">
            <span>PEACE POD</span>
          </NavLink>
          {/* logo */}
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3">
            <div className="space-y-6 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-slate-900 tracking-wide"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
                }
              >
                <Home
                  className="h-6 w-6 hover:h-7 hover:w-7"
                  aria-hidden="true"
                />
                <span className="mx-2 text-base font-bold">Home</span>
              </NavLink>

              <NavLink
                to="/music"
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-slate-900 tracking-wide"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
                }
              >
                <Music
                  className="h-6 w-6 hover:h-7 hover:w-7"
                  aria-hidden="true"
                />
                <span className="mx-2 text-base font-bold">Music</span>
              </NavLink>

              <NavLink
                to="/scene"
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-slate-900 tracking-wide"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
                }
              >
                <Palmtree
                  className="h-6 w-6 hover:h-7 hover:w-7"
                  aria-hidden="true"
                />
                <span className="mx-2 text-base font-bold">Scene</span>
              </NavLink>

              <NavLink
                to="/relaxandbreathe"
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-slate-900 tracking-wide"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
                }
              >
                <HeartPulse
                  className="h-6 w-6 hover:h-7 hover:w-7"
                  aria-hidden="true"
                />
                <span className="mx-2 text-base font-bold">
                  Relax and Breathe
                </span>
              </NavLink>

              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-slate-900 tracking-wide"
                    : "flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide"
                }
              >
                <UsersRound
                  className="h-6 w-6 hover:h-7 hover:w-7"
                  aria-hidden="true"
                />
                <span className="mx-2 text-base font-bold">About Us</span>
              </NavLink>

            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}

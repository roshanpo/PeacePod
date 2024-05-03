import { Fragment } from "react"
import { useModalStates } from "@/Modal/useModalStore"
import { Dialog, Transition } from "@headlessui/react"
import { HeartPulse, Home, MessageSquareHeart, Music, UsersRound, X } from "lucide-react"
import CustomLink from "@/lib/CustomLink"
import { useLocation } from "react-router-dom"
import DashboardLayout from "@/Pages/dashboard/Dashboard"
import '/images/peacepod_logo.png'

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Home,
    current: true,
  },
  {
    name: "Music",
    href: "/music/allmusic",
    icon: Music,
    current: false,
  },
  {
    name: "Relax & Breathe",
    href: "/relaxandbreathe",
    icon: HeartPulse,
    current: false,
  },
  {
    name: "About Us",
    href: "/aboutus",
    icon: UsersRound,
    current: false,
  },
  {
    name: "Talk To Hope",
    href: "/talktohope",
    icon: MessageSquareHeart,
    current: false,
  },
]

export function Navbar() {
  const {
    sidebarModal: { open: sidebarOpen, toggle: setSidebarOpen },
  } = useModalStates()

  const location = useLocation();

  return (
    <>
    {/* {location.pathname.startsWith('/dashboard') ? '' : ( */}
       <div className="">
       <Transition.Root show={sidebarOpen} as={Fragment}>
         <Dialog
           as="div"
           className="relative z-50 lg:hidden"
           onClose={() => setSidebarOpen(false)}
         >
           <Transition.Child
             as={Fragment}
             enter="transition-opacity ease-linear duration-300"
             enterFrom="opacity-0"
             enterTo="opacity-100"
             leave="transition-opacity ease-linear duration-300"
             leaveFrom="opacity-100"
             leaveTo="opacity-0"
           >
             <div className="fixed inset-0 bg-gray-900/80" />
           </Transition.Child>

           <div className="fixed inset-0 flex">
             <Transition.Child
               as={Fragment}
               enter="transition ease-in-out duration-300 transform"
               enterFrom="-translate-x-full"
               enterTo="translate-x-0"
               leave="transition ease-in-out duration-300 transform"
               leaveFrom="translate-x-0"
               leaveTo="-translate-x-full"
             >
               <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                 <Transition.Child
                   as={Fragment}
                   enter="ease-in-out duration-300"
                   enterFrom="opacity-0"
                   enterTo="opacity-100"
                   leave="ease-in-out duration-300"
                   leaveFrom="opacity-100"
                   leaveTo="opacity-0"
                 >
                   <div className="absolute left-full top-0 flex w-16 justify-center pt-5 ">
                     <button
                       type="button"
                       className="-m-2.5 p-2.5"
                       onClick={() => setSidebarOpen(false)}
                     >
                       <span className="sr-only">Close sidebar</span>
                       <X className="h-6 w-6 text-white" aria-hidden="true" />
                     </button>
                   </div>
                 </Transition.Child>
                 

                 <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ">
                   <div className="flex h-16 shrink-0 items-center">
                     <img
                       className="h-8 w-auto"
                       src="/images/peacepod_logo.png"
                       alt="peacepod logo"
                     />
                   </div>
                   <nav className="flex flex-1 flex-col">
                     <ul role="list" className="flex flex-1 flex-col gap-y-2">
                       {navigation.map((item) => (
                         <li key={item.name}>
                           <CustomLink
                           title={item.name}
                           to={item.href}
                           current={item.current}
                         // Icon={item.icon}
                       />
                         </li>
                         
                       ))}
                     </ul>
                   </nav>
                 </div>
               </Dialog.Panel>
             </Transition.Child>
           </div>
         </Dialog>
       </Transition.Root>

       {/* Static sidebar for desktop */}
       <div className=" hidden border-r-2 md:fixed lg:inset-y-0 lg:top-0 lg:z-20 lg:flex lg:w-72 lg:max-w-[200px]  lg:flex-col lg:pt-56">
         <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 ">
           <nav className="flex flex-1 flex-col">
             <ul role="list" className="flex flex-1 flex-col gap-y-7">
               <li>
                 <ul role="list" className="-mx-2 space-y-7">
                   {navigation.map((item) => (
                     <li className="" key={item.name}>
                       <CustomLink
                         title={item.name}
                         to={item.href}
                         current={item.current}
                         Icon={item.icon}
                       />
                       
                     </li>
                   ))}
                 </ul>
               </li>
             </ul>
           </nav>
         </div>
       </div>
     </div>
      {/* )} */}

      
    </>
  )
}

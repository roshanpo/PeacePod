import useAuth from "@/hooks/useAuth"
import { Disclosure } from "@headlessui/react"
import { HomeIcon } from "lucide-react"
import { Link } from "react-router-dom"

import { UserNavbar } from "./UserNavbar"

export default function TopNav() {
  const {
    user
  } = useAuth()
  return (
    <Disclosure as="nav" className="sticky top-0 isolate z-10 bg-white  shadow">
      {() => (
        <>
          <div className=" mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="hidden px-2 lg:flex lg:px-0">
                <div className="flex shrink-0 items-center">
                  <Link to="/">
                  <img
                  className="block h-14 w-auto lg:hidden rounded-2xl"
                  src="/images/peacepod_logo.png"
                  alt="PEACE POD LOGO"
                />
                <img
                  className="hidden h-14 w-auto lg:block rounded-2xl"
                  src="/images/peacepod_logo.png"
                  alt="PEACE POD LOGO"
                />
                  </Link>
                </div>
              </div>
              {/* //static */}
              <div className=" flex flex-1 items-center justify-end gap-4 px-2 lg:ml-6 lg:justify-end">
                <div className="ml-6 flex max-h-[60px]  flex-wrap overflow-hidden">
                  {user && (
                    <UserNavbar Icon={HomeIcon} title="Back to Home" to="/" />
                  )}
                  
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

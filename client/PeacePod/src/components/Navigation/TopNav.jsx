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
                      className="block h-8 w-auto lg:hidden"
                      src="/news/ybc-logo-white.png"
                      alt="YBC NEWS"
                    />
                    <img
                      className="hidden h-[80%] w-auto lg:block"
                      src="/news/ybc-logo-white.png"
                      alt="YBC NEWS"
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
                  {/* {TopNavbarItems.map((item: any) => {
                    if (item.isCountry) {
                      return <CountrySelect key={item.title} />
                    }

                    return (
                      <CustomLinkTop
                        key={item.title}
                        to={item.href}
                        title={item.title}
                        className="relative after:absolute after:-right-0 after:top-2 after:h-[85%] after:w-[1px] after:bg-gray-600 [&:last-of-type]:after:hidden"
                      />
                    )
                  })} */}
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

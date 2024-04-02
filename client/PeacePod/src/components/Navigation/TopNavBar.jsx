import { useModalStates } from "@/Modal/useModalStore"
import {
  LayoutDashboard,
  LogOut,
  Menu,
  MoreHorizontalIcon,
  User,
} from "lucide-react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { CustomLinkTop } from "@/lib/CustomLink"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import useAuth from "@/hooks/useAuth"
import { UserNavbar } from "./UserNavbar"

export default function TopNavbar() {
  let TopNavbarItems = [
    { href: "/recommendedmusic", title: "Recommended for you" },
  ]
  const { sidebarModal } = useModalStates()
  const { user, logoutUser } = useAuth()

  return (
    <nav className="relative z-30 bg-white shadow">
      <div className=" mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-auto justify-between">
          <button
            type="button"
            className="z-40 p-2.5 text-gray-700 lg:hidden"
            onClick={() => sidebarModal.toggle(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="hidden px-2 lg:flex lg:px-0">
            <div className="flex shrink-0 items-center px-1 py-1 ">
              <Link to="/" className="inline-block">
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

          <div className="flex items-center justify-center gap-2 md:gap-4 lg:justify-end">
            <div
              className={cn(
                "flex flex-wrap items-center gap-x-6 overflow-hidden p-2"
                // showFullNav ? "h-auto" : "h-[48px]"
              )}
            >
              {TopNavbarItems.map((item) => {
                return (
                  <CustomLinkTop
                    key={item.title}
                    to={item.href}
                    title={item.title}
                    className="relative py-2 text-xs before:absolute before:bottom-0 before:h-[2px] before:w-full before:bg-red-500 after:absolute after:-right-3 after:top-2.5 after:h-5 after:w-[1px] after:bg-gray-600 md:text-sm [&:last-of-type]:after:hidden"
                  />
                )
              })}
            </div>
            <div>
              <Button
                variant="link"
                // onClick={() => setShowFullNav((prev) => !prev)}
                className="bg-transparent p-0 xss:hidden lg:hidden"
              >
                <MoreHorizontalIcon className="h-8 w-8 text-slate-950" />
              </Button>
            </div>

            <div>
              {!user ? (
                <NavLink to="./signin" className="flex gap-2">
                  <span className="rounded-full bg-black p-1">
                    <User fill="white" stroke="white" size={16} />
                  </span>
                  <span className="whitespace-nowrap">Sign In</span>
                </NavLink>
              ) : user.name === "roshan" ? (
                <div className="min-w-[109.06px] pl-4">
                  <UserNavbar Icon={LayoutDashboard} />
                </div>
              ) : (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      asChild
                      className="border-none outline-none focus-visible:ring-transparent"
                    >
                      <Button
                        variant="ghost"
                        className="relative h-9 w-9  rounded-full outline-none"
                      >
                        <Avatar className=" h-9 w-9 bg-primary-foreground">
                          <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                          <AvatarFallback className="bg-black uppercase text-white">
                            {user?.name &&
                              user.name.charAt(0) + user.name.charAt(1)}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {user?.name}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => {
                          logoutUser()
                          navigate("/")
                          toast({ title: "Logged Out" })
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

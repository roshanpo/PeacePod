import useAuth from "@/hooks/useAuth"
import { useModalStates } from "@/Modal/useModalStore"
import { KeyRound, LogOut, UserCircleIcon } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"

export function UserNavbar({
  title = "Go to Admin Panel",
  to = "/dashboard/addmusic",
  Icon,
}) {
  const {
    logoutUser,
    user
  } = useAuth()
  const { toast } = useToast()
  const navigate = useNavigate()
  const isDashboard = useLocation().pathname.split("/").includes("dashboard")
  const { changePasswordModal } = useModalStates()
  return (
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
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.name}
            </p>
            {/* <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p> */}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isDashboard && (
          <>
            <DropdownMenuItem
              asChild
              onSelect={() => {
                changePasswordModal.toggle()
              }}
            >
              <span className="flex w-full items-center gap-2">
                <span>
                  <KeyRound className="h-4 w-4" />
                </span>
                <span>Change Password</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                to="manageaccount"
                className="flex w-full items-center gap-2"
              >
                <span className="inline-block">
                  <UserCircleIcon className="h-4 w-4" />
                </span>
                <span>Manage Account</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to={to} className="flex w-full items-center gap-2">
            <span className="inline-block">{<Icon className="h-4 w-4" />}</span>
            <span>{title}</span>
          </Link>
        </DropdownMenuItem>
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
  )
}
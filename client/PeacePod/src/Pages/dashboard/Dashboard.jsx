import { Suspense } from "react"
import useAuth from "@/hooks/useAuth"
import TopNav from "@/components/Navigation/TopNav"
import { Navigate, Outlet, useLocation } from "react-router-dom"

import { FullPageLoader } from "@/components/ui/loader"
import MainNavbar from "@/components/Navigation/MainNav"
// import Permission from "@/components/common/permission/Permission"

export default function DashboardLayout() {
  const { user } = useAuth()
    const location = useLocation();
  console.log(location.pathname)

  return (
    <>
      {/* {location.pathname.startsWith('/dashboard')? ( */}
        <>
          <TopNav />
          <header>
            <MainNavbar />
          </header>
          <Suspense fallback={<FullPageLoader />}>
        <Outlet />
      </Suspense>
        </>
      {/* ):''} */}

    
    </>
  )
}

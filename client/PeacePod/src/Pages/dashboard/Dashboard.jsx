// import { Suspense } from "react"
import TopNav from "@/components/Navigation/TopNav"
import {  Outlet } from "react-router-dom"
// import { FullPageLoader } from "@/components/ui/loader"
import MainNavbar from "@/components/Navigation/MainNav"

export default function DashboardLayout() {
  return (
    <>
      <>
        <TopNav />
        <header>
          <MainNavbar />
        </header>
        {/* <Suspense fallback={<FullPageLoader />}> */}
          <Outlet />
        {/* </Suspense> */}
      </>
    </>
  )
}

import React, { Suspense } from 'react'
import TopNavbar from './components/Navigation/TopNavBar'
import { Navbar } from './components/Navigation/Navbar'
import { Outlet } from 'react-router-dom'
import { FullPageLoader } from './components/ui/Loader'

function Layout() {
  return (
    <>
    <TopNavbar />
    <div className="flex flex-row ">
      <Navbar />
      <Suspense fallback={<FullPageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  </>
  )
}

export default Layout
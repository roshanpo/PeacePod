import React, { Suspense } from 'react'
import TopNavbar from './components/Navigation/TopNavBar'
import { Navbar } from './components/Navigation/Navbar'
import { Outlet } from 'react-router-dom'
import { FullPageLoader } from './components/ui/Loader'
import Footer from './components/Footer'

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
    <Footer />
  </>
  )
}

export default Layout
import "./App.css"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navigation/Navbar"
import { FullPageLoader } from "./components/ui/Loader"
import { Suspense } from "react"
import TopNavbar from "./components/Navigation/TopNavBar"
import DashboardLayout from "./Pages/dashboard/Dashboard"
import Layout from "./Layout"
function App() {
  const location = useLocation()

  return (
    <>
    {
      location.pathname.startsWith("/dashboard") ? <DashboardLayout /> :
      <Layout />
    }
        
    </>
  )
}

export default App

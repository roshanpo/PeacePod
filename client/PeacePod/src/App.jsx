import "./App.css"
import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navigation/Navbar"

function App() {
  return (
    <>
      {/* add navbar */}
      <div className="flex flex-row ">
        <Navbar />
        <Outlet />
      </div>

      {/* add footer */}
    </>
  )
}

export default App

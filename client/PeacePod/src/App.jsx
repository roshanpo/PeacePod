// lets make this layout for our outet and so on..
// what should i add here
// navigation
// footer
// outlet
//

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

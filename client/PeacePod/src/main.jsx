import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Home } from './Pages/Home/Home.jsx'
import { AboutUs } from './Pages/AboutUs/AboutUs.jsx'
import { Music } from './Pages/Music/Music.jsx'
import { Scene } from './Pages/Scene/Scene.jsx'
import { RelaxAndBreathe } from './Pages/RelaxAndBreathe/RelaxAndBreathe.jsx'
import { TalkToHope } from './Pages/TalkToHope/TalkToHope.jsx'
import { SignUp } from './components/Forms/SignUp.jsx'
import { SignIn } from './components/Forms/SignIn.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/music' element={<Music />} />
      <Route path='/scene' element={<Scene/>} />
      <Route path='/relaxandbreathe' element={<RelaxAndBreathe/>} />
      <Route path='/talktohope' element={<TalkToHope/>} />
      
    </Route>
    
  )


)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)

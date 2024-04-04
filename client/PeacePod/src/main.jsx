import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './App.css'
import { Home } from './Pages/Home/Home.jsx'
import { Music } from './Pages/Music/Music.jsx'
import { RelaxAndBreathe } from './Pages/RelaxAndBreathe/RelaxAndBreathe.jsx'
import { TalkToHope } from './Pages/TalkToHope/TalkToHope.jsx'
import { SignUp } from './components/Forms/SignUp.jsx'
import { SignIn } from './components/Forms/SignIn.jsx'
import { DeepBreathing } from './components/CommonComponents/BreathingComponents/DeepBreathing.jsx'
import { Four78Technique } from './components/CommonComponents/BreathingComponents/Four78Technique.jsx'
import AllMusic from './Pages/Music/AllMusic.jsx'
import PlayMusic from './components/sound/PlayMusic.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import CalmMusic from './Pages/Music/CalmMusic.jsx'
import HappyMusic from './Pages/Music/HappyMusic.jsx'
import NatureMusic from './Pages/Music/NatureMusic.jsx'
import SadMusic from './Pages/Music/SadMusic.jsx'
import SpiritualMusic from './Pages/Music/SpiritualMusic.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PrivateRoute from './utils/PrivateRoute.jsx'
import { Toaster } from './components/ui/toaster.jsx'
import AddMusic from './Pages/dashboard/AddMusic.jsx'
import DashboardLayout from './Pages/dashboard/Dashboard.jsx'
import ManageMusic from './Pages/dashboard/ManageMusic.jsx'
import ManageUsers from './Pages/dashboard/ManageUsers.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import Recommendation from './Pages/recommendation/Recommendation.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}  />
      {/* <Route path="" element={<PrivateRoute Component={Home} />} /> */}
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn/>} />
      {/* navbars */}
      {/* <Route path='/usernavbar' element={<UserNavbar/>} /> */}

      <Route path='/aboutus' element={<AboutUs />} />
      
      <Route path='/music' element={<Music />} >
        <Route path='' element={<AllMusic />} />
        <Route path='/music/allmusic' element={<AllMusic />} />
        <Route path='/music/calmmusic' element={<CalmMusic />} />
        <Route path='/music/happymusic' element={<HappyMusic />} />
        <Route path='/music/naturemusic' element={<NatureMusic />} />
        <Route path='/music/sadmusic' element={<SadMusic />} />
        <Route path='/music/spiritualmusic' element={<SpiritualMusic />} />
        <Route path='/music/:id' element={<PlayMusic />} />
      </Route>

      {/* <Route path='/scene' element={<Scene/>} /> */}
      <Route path='/relaxandbreathe' element={<RelaxAndBreathe/>} />
        <Route path='/relaxandbreathe/deepbreathing' element={<DeepBreathing/>} />
        <Route path='/relaxandbreathe/4-7-8technique' element={<Four78Technique/>} />
      {/* <Route path='/talktohope' element={<TalkToHope/>} /> */}
      {/* <Route path="talktohope" element={<PrivateRoute Component={TalkToHope} />} /> */}
      <Route element={<PrivateRoute />}>
        <Route path='/talktohope' element={<TalkToHope/>} />
        <Route path=''>
          <Route path='dashboard/addmusic' element={<AddMusic />}/>
          <Route path='dashboard/managemusic' element={<ManageMusic />} />
          <Route path='dashboard/manageusers' element={<ManageUsers />}/>
          <Route path='recommendedmusic' element={<Recommendation />} />
        </Route>
      </Route>
      
    </Route>
    
  )


)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/> 
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

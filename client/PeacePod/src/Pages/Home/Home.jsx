import { Button } from "../../components/CommonComponents/Button"
import { ArrowRight } from "lucide-react"
import {  NavLink } from "react-router-dom"
import useAuth from '../../hooks/useAuth'

export const Home = () => {
  const {user} = useAuth();
  return (
    <>
      <div className="home-background min-h-screen w-full lg:ml-52">
        <div className="flex flex-flow-col gap-8 h-full px-6">
          <div className="mx-auto w-full md:w-[60%] pt-14 pl-4 md:left-72">
            <div className="leading-snug enriqueta-bold text-6xl shadow-sm text-white">
              {
                user && <h3 className='text-4xl capitalize'>{user.name},</h3>
              }
              <h1>Welcome To</h1>
              <h1 className="tracking-[6px]">PEACEPOD</h1>
              
            </div>
            <div className="flex mt-20">
              <div className="lg:w-[80%] ">
                <div className="text-white leading-6 font-medium roboto text-xl tracking-normal">
                  <p>
                    All in one destination for cultivating traquility and
                    enhancing your mental well-being.
                  </p>
                </div>

                {!user && 
                <div className="mt-20 flex flex-row gap-4">
                  <NavLink to='/signup'>
                    <Button title="Sign Up" />
                  </NavLink>

                  <NavLink 
                  to='/signin'
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md shadow-lg px-3 py-2 text-sm font-semibold text-white"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </NavLink>
                </div>
              }
              </div>
            </div>
          </div>

          <div className="w-[40%]">
            <div className="mt-14 animate-bounce mr-4 lg:hidden">
              {/* add that image */}
              <img src="/images/home-image.svg" alt="homeImage" />
            </div>

            <div className="hidden lg:flex lg:flex-col gap-4 pr-4 pt-4 max-h-screen justify-end sm:-mt-44 lg:mt-0 lg:pl-0 lg:pr-7">

              <div className="relative  w-auto">
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

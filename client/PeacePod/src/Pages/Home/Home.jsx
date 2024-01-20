// add images and background and

import { Button } from "../../components/CommonComponents/Button"
import { ArrowRight } from 'lucide-react'
import im from '../../../public/images/image1.jpg'

export const Home = () => {
  return (
    <>
      <div className="home-background h-screen w-full"></div>


<div>
      <div className="absolute h-full pt-14 pl-4 md:left-72">
        <div className="w-[60%] enriqueta-bold text-6xl shadow-sm text-white">
          <h1>Welcome to</h1>
          <h1 className="tracking-[6px]">PEACEPOD</h1>
        </div>
        <div className="flex">

          <div className="w-1/2 lg:w-[80%] ">
            <div className="text-white leading-6 font-medium roboto text-xl tracking-normal">
              <p>
                All in one destination for cultivating traquility and enhancing
                your mental well-being.
              </p>
            </div>

            <div className="mt-20 flex flex-row gap-4">
              <Button title="Get Started" />

              <button
                type="button"
                className="inline-flex items-center rounded-md shadow-lg px-3 py-2 text-sm font-semibold text-white"
              >
                Button Text
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        
      </div>
      <div>
      {/* <div className=" flex justify-end gap-4 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <img
                 src="../../../public/images/image1.jpg"
                  alt="meditationimg1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>

            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                  <img
                  src="../../../public/images/image1.jpg"
                    alt="meditationimg1"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                </div>
            
              <div className="relative">
                <img
                  src="../../../public/images/image1.jpg"
                  alt="meditationimg1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
            


            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <div className="relative">
                <img
                 src="../../../public/images/image1.jpg"
                  alt="meditationimg1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              </div>

              <div className="relative">
                <img
                 src="/images/image1.jpg"
                  alt="meditationimg1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              </div>
            </div>

          </div> */}
      </div>

      </div>
    </>
  )
}

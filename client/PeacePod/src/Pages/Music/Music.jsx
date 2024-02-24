import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export const Music = () => {
  const music_genre = [
    "All",
    "Ambient",
    "Classical",
    "Instrumental",
    "Lofi",
    "Motivating",
    "Nature-instrument",
    "Nature-melodies",
    "Scene-audio",
  ]
  const [dropdownOpen, setDropDownOpen] = useState(false)
  const toggleDropdown = () => {
    setDropDownOpen(!dropdownOpen)
  }
  const [selectedGenre, setSelectedGenre] = useState('Music')
  return (
    <>
    <div className="music-background blur-sm z-10"></div>
      <div className="md:pl-64 absolute z-20 w-full min-h-screen overflow-y-scroll  border-r-2 border-red-400">
        <div className="flex flex-col mt-8 pl-8">
          <div className="justify-between mx-auto flex">
            <div className="px-4 py-2">
              <h3 className="leading-snug tracking-widest enriqueta-bold text-4xl text-white">
                Music
              </h3>
            </div>
            {/* div for adding music and popover */}
            <div className="flex w-48 flex-col justify-between">
              <div className="mx-auto mt-2">
                <button
                  onClick={toggleDropdown}
                  className="relative text-left z-10 block rounded-md w-48  bg-slate-600 text-gray-200 px-6 text-lg py-2 overflow-hidden "
                >
                  {selectedGenre}
                  {/* <svg
                    class="h-5 w-5 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10
                    10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                </button>
              </div>
              {dropdownOpen && (
                <div className="flex flex-col py-2 w-48 bg-blue-300 roundeed-md">
                  {music_genre.map((music) => {
                  if (!music) {
                      return null
                    }
                    return (
                      <Link to='' onClick={()=>{
                        toggleDropdown()
                        setSelectedGenre(music)
                      }}>
                        <div className="block px-4 py-2 text-lg capitalize text-gray-800 hover:bg-indigo-500 hover:text-white">
                          {music}
                        </div>
                      </Link>

                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-[220px] z-10 pt-24 absolute w-full mt-6">
            <div className="grid grid-flow-col">
              <Outlet/>
            </div>
          </div>
      
    </>
  )
}

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export const Music = () => {
  const music_genre = [
    "All",
    "Happy",
    "Calm",
    "Nature",
    "Sad",
    "Spiritual"
  ]
  const [dropdownOpen, setDropDownOpen] = useState(false)
  const toggleDropdown = () => {
    setDropDownOpen(!dropdownOpen)
  }
  const [selectedGenre, setSelectedGenre] = useState('Music')
  return (
    <>
    {/* <div className="w-full min-h-screen overflow-y-scroll music-background blur-sm"></div> */}
    <div className="w-full min-h-screen music-background lg:ml-48" >
      {/* <div className=" relative z-20 "> */}
        <div className="flex flex-col mt-8 pl-8">
          <div className="justify-between mx-auto flex">
            <div className="px-4 py-2">
              <h3 className="leading-snug tracking-widest enriqueta-bold text-4xl text-white">
                Music
              </h3>
            </div>
            {/* div for adding music and popover */}
            <div className="flex w-52 flex-col justify-between">
              <div className="mx-auto mt-2">
                <button
                  onClick={toggleDropdown}
                  className="relative text-left z-10 block rounded-md w-52  bg-slate-600 text-gray-200 px-6 text-lg py-2 overflow-hidden "
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
                <div className="flex absolute z-30 top-[40px] flex-col w-52 bg-white roundeed-md">
                  {music_genre.map((music) => {
                    if (!music) {
                      return null
                    }
                    return (
                      <Link to={`/music/${music.toLowerCase()}music`} onClick={()=>{
                        toggleDropdown()
                        setSelectedGenre(music)
                      }}>
                        <div className="block rounded-md px-4 py-2 text-lg capitalize text-gray-800 hover:bg-indigo-500 hover:text-white">
                          {music}
                        </div>
                      </Link>

                    )
                  })}
                </div>
              )}
            </div>
          </div>
        {/* </div> */}
      </div>

      <div className=" z-10 relative w-full mt-6">
        <div className="pl-4 grid grid-flow-col pr-4">
          <Outlet/>
        </div>
      </div>
      </div>
    </>
  )
}

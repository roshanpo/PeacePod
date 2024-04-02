import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "./Button"

function Relaxcomp({ title, description, imageUrl, clickUrl, to }) {
  return (
    <>
      <div className="mt-6 relative aspect-video lg:aspect-1 lg:max-h-[300px] min-w-[80%] mx-auto rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="z-0 h-full w-full rounded-md object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 text-left w-full">
          <h1 className="text-2xl ml-4 font-semibold text-white">{title}</h1>
          <p className="ml-4 mt-2 text-lg text-gray-300">
            {description}
          </p>
          <Link to={clickUrl}>
          <button className="mt-2 ml-4 inline-flex cursor-pointer items-center text-base font-semibold text-white">
            Read More
          </button>
          </Link>
          
          <NavLink to={`/relaxandbreathe/${to}`}>
            <div className="mt-2 ml-4 mr-4 text-center font-semibold text-lg text-white hover:animate-pulse bg-gradient-to-r from-[#b275f0] to-[#db75d5] from-0% to-90% ">
              <button className="px-2 py-[4px]">Begin</button>
            </div>
          </NavLink>
        </div>
        
      </div>
    </>
  )
}

export default Relaxcomp

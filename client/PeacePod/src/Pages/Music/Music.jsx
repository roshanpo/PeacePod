import React from "react"
// import DropDown from "../../components/CommonComponents/DropDown"
import DropDown from "../../components/CommonComponents/DropDown"

export const Music = () => {
  return (
    <>
      <div className=" w-full min-h-screen overflow-y-scroll music-background border-r-2 border-red-400">
        <div className="flex mt-8 pl-8">
          <div className="justify-between  mx-auto flex">
            <div className="px-4 py-2">
            <h3 className="leading-snug tracking-widest enriqueta-bold text-4xl text-white">
              Music
            </h3>
            </div>
            {/* div for adding music and popover */}
            <div className="">
            <DropDown title="Music" />
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-flow-col">
              {/* add a loop in here to map all the elements */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

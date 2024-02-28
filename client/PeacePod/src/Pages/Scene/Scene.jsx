import { Play } from "lucide-react"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import audio from "../../assets/all-shall-end.mp3"

export const Scene = () => {
  // const handleVideoClick = (video) =>{

  // }
  useEffect(() => {
    console.log(audio)
  }, audio)

  return (
    <>
      <div className="w-full h-50px">
        <audio src="audio" controls></audio>
      </div>
      <div className="w-full min-h-screen overflow-y-scroll signup-background">
        <div className="flex flex-col absolute  px-2 py-2 w-full">
          <div className="px-4 py-2 text-center w-full">
            <h3 className="leading-snug tracking-widest enriqueta-bold text-4xl text-white">
              Scenes
            </h3>
          </div>

          <div className="grid grid-flow-row md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4 w-full">
            {/* 1 */}
            <Link to={`/music/playmusic?audioFile=${audio}`}>
              {/* <button onClick={() => handleVideoClick(a)}> */}
              <div className="rounded-lg">
                <div className="relative h-[300px] w-[250px] rounded-md shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="video's name"
                    className="z-0 h-full w-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute w-full bottom-4 left-4 text-center items-center text-white ">
                    <h1 className="text-lg font-semibold text-white">
                      Video's name
                    </h1>
                    <Play className="mx-auto" />
                  </div>
                </div>
              </div>
              {/* </button> */}
            </Link>

            <Link to="/">
              {/* 2 */}
              <div className="rounded-lg">
                <div className="relative h-[300px] w-[250px] rounded-md shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="video's name"
                    className="z-0 h-full w-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute w-full bottom-4 left-4 text-center items-center text-white ">
                    <h1 className="text-lg font-semibold text-white">
                      Video's name
                    </h1>
                    <Play className="mx-auto" />
                  </div>
                </div>
              </div>
            </Link>

            {/* 3 */}
            <div className="rounded-lg">
              <div className="relative h-[300px] w-[250px] rounded-md shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="video's name"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute w-full bottom-4 left-4 text-center items-center text-white ">
                  <h1 className="text-lg font-semibold text-white">
                    Video's name
                  </h1>
                  <Play className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

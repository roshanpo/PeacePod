import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const SadMusic = () => {
  const [allMusic, setAllMusic] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/category/sad") // Replace with your API endpoint
        const music_data = response.data.category
        setAllMusic(music_data)
      } catch (error) {
        console.error("Error fetching music list:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="grid xss:grid-cols-2 md:grid-flow-col md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 gap-4 lg:grid-rows-3 pb-4">
        {allMusic.slice(0, 8).map((music) => {
          if (!music) {
            return null
          }
          return (
            <div
              key={music}
              className="w-full md:min-w-[300px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 relative rounded-md border"
            >
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {music} &nbsp;
                </h1>

                {/* we can write genre of the music in the below div */}
                {/* <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Macbook 
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Apple
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                        #Laptop
                    </span>
                  </div> */}
                <Link
                  to={`/music/${music}`}
                  // to={{ pathname: '/music/playmusic', state: { name: {music} } }}
                >
                  <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Listen
                  </button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SadMusic

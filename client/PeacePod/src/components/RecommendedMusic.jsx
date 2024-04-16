import { recommendMusic } from "@/api/reommended"
import { useQuery } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import React from "react"

export default function RecommendedMusic({ music }) {

  const navigate = useNavigate();
  const { data: recommendedMusic } = useQuery({
    queryKey: ["recommendmusic"],
    queryFn: async () => recommendMusic(music),
  })

  const handleClick = (music) =>{
    navigate(`/music/${music}`)
    window.location.reload();
  }

  return (
    <div className="text-white">
      {
        recommendedMusic?(
        <h1 className="text-white w-full mx-4 mt-10 text-center text-3xl uppercase font-semibold">
        recommended for you
      </h1>):
      (<></>)
      }
      
      <div className="gap-4 overflow-hidden mt-8 mb-8 w-full grid lg:grid-cols-4 grid-cols-3">
        {recommendedMusic &&
          recommendedMusic?.map((music, index) => {
            if (!music) {
              return null
            }
            return (
              <div key={index} className="">
                <div className="">
                  <img
                    className=""
                    src="/images/music-images/vibe.jpg"
                    alt="recommended music"
                  />
                </div>
                <button onClick={()=>handleClick(music)}  className="cursor-pointer w-full">
                  <h1 className="bg-slate-800 px-2 py-2 text-center rounded-md">
                    {music}
                  </h1>
                </button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

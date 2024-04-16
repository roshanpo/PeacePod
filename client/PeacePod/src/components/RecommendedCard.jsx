import React from "react"
import { Link } from "react-router-dom"

export default function RecommendedCard({ music_name }) {
  return (
    <>
      <div className="aspect-video w-[300px] h-[200px] ">
        <div className="flex flex-col">
          {/* image */}
          <div className="rounded-md aspect-video h-[200px] w-[300px] overflow-hidden">
            <img src="/images/music-images/Arcadia.jpg" alt="recommended music image" />
          </div>

          <div className="font-bold text-[18px]">{music_name}</div>

          <div>
            <Link to={`/music/${music_name}`}>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Listen
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

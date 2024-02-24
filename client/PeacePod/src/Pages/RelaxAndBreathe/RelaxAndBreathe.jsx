import React from "react"
import Relaxcomp from "../../components/CommonComponents/Relaxcomp"

export const RelaxAndBreathe = () => {
  return (
    <>
      <div className=" w-full min-h-screen overflow-y-scroll home-background ">
        <div className="flex flex-col max-h-screen">
          <div className="px-4 py-2 mt-8">
            <h3 className="text-center leading-snug tracking-widest enriqueta-bold text-4xl text-white">
              Relax and Breathe
            </h3>
          </div>
          <div className="flex-flow-col justify-between w-[95%] mx-auto pb-4">
            <Relaxcomp 
            title="Deep Breathing"
            description="Deep breathing is one of the
            best way to relax and let your worries go.
            "
            imageUrl=""
            clickUrl="https://www.healthline.com/health/diaphragmatic-breathing#"
            to="deepbreathing"
            />
            <Relaxcomp 
            title="4-7-8 Technique"
            description="The 4-7-8 technique forces the mind
            and body to focus on regulating the breath."
            imageUrl=""
            clickUrl="https://www.healthline.com/health/4-7-8-breathing"
            to="4-7-8technique"
            />
          </div>
        </div>
      </div>
    </>
  )
}

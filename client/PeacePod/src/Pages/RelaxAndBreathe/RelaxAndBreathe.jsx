import React from "react"
import Relaxcomp from "../../components/CommonComponents/Relaxcomp"

export const RelaxAndBreathe = () => {
  return (
    <>
      <div className="w-full h-full home-background lg:ml-52">
        <div className="flex flex-col pl-4 xlg:max-w-7xl xlg:pl-8">
          <div className=" mt-8">
            <h3 className="text-center leading-snug tracking-widest enriqueta-bold text-4xl text-white">
              Relax and Breathe
            </h3>
          </div>
          <div className="flex-flow-col justify-between w-[95%] pb-4">
            <Relaxcomp 
            title="Deep Breathing"
            description="Deep breathing is one of the
            best way to relax and let your worries go.
            "
            imageUrl="./images/breathing-images/deep-breathing-mobile.jpg"
            clickUrl="https://www.healthline.com/health/diaphragmatic-breathing#"
            to="deepbreathing"
            />
            <Relaxcomp 
            title="4-7-8 Technique"
            description="The 4-7-8 technique forces the mind
            and body to focus on regulating the breath."
            imageUrl="./images/breathing-images/four-seven-eight-mobile.jpg"
            clickUrl="https://www.healthline.com/health/4-7-8-breathing"
            to="4-7-8technique"
            />
          </div>
        </div>
      </div>
    </>
  )
}


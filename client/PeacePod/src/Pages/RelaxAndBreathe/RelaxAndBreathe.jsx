import React from "react"
import Relaxcomp from "../../components/CommonComponents/Relaxcomp"

export const RelaxAndBreathe = () => {
  return (
    <>
      {/* <div className=" mx-auto px-6 py-2 lg:pl-56 home-background "> */}
      <div className="w-full h-full home-background lg:ml-48">
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


// import React,{useEffect} from 'react'
// import './relax.css'

// export const RelaxAndBreathe = () => {
//   useEffect(() => {
//     const container = document.getElementById('container');
//     const text = document.getElementById('text');

//     const totalTime = 7500;
//     const breatheTime = (totalTime / 5) * 2;
//     const holdTime = totalTime / 5;

//     const breathAnimation = () => {
//       text.innerText = 'Breathe In!';
//       container.className = 'container grow';

//       setTimeout(() => {
//         text.innerText = 'Hold';

//         setTimeout(() => {
//           text.innerText = 'Breathe Out!';
//           container.className = 'container shrink';
//         }, holdTime);
//       }, breatheTime);
//     };

//     breathAnimation();

//     const interval = setInterval(breathAnimation, totalTime);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container lg:ml-48 w-[600px]" id="container">
//       <div className="circle"></div>
//       <p id="text"></p>
//       <div className="pointer-container">
//         <span className="pointer"></span>
//       </div>
//       <div className="gradient-circle"></div>
//     </div>
//   );
// }

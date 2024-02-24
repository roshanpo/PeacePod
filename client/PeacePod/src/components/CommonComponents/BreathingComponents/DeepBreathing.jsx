// import React from 'react'
// import { ArrowLeft } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// export const DeepBreathing = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//     <div className=" w-full min-h-screen overflow-y-scroll text-white music-background border-r-2 border-red-400">
//         <div className='w-full flex flex-flow-col justify-between mt-8 p-2 text-center leading-snug tracking-wide enriqueta-bold text-4xl '> 
//           <div className="w-[90%]">
//             Deep Breathing
//           </div>
//           <div className='pr-4'>
//             <button onClick={()=>navigate(-1)}>
//               <ArrowLeft />
//             </button>
//           </div>
//         </div>

//         <div className='mt-14'>
//           {/* <div className='small-circle mx-auto mb-2'></div>
//           <div className='circle mx-auto'>
//             <div className=''>small circle that moves around the circle</div>
//             make a circle
//             <div>play button</div>
//           </div> */}
//           <div class="relaxer-container" id="relaxer-container">
//         <div class="circle"></div>
//         <p id="relax-text"><i class="fas fa-play fa-2x startBreathe"></i></p>
//         <div class="pointer-container">
//           <span class="pointer"></span>
//         </div>
//         <div class="gradient-circle"></div>
//       </div>
//         </div>
//     </div>
//     </>
//   )
// }


import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DeepBreathing = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [containerClass, setContainerClass] = useState('relaxer-container');
  const [pointerContainerAnimation, setPointerContainerAnimation] = useState('paused');
  const [pointerAnimation, setPointerAnimation] = useState('paused');
  const [animationStarted, setAnimationStarted] = useState(false);

  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  useEffect(() => {
    
    if (animationStarted) {
      const breathAnimation = () => {
        console.log('animation started')
        setText('Breathe In!');
        setContainerClass('relaxer-container grow');

        setTimeout(() => {
          setText('Hold');

          setTimeout(() => {
            setText('Breathe Out!');
            setContainerClass('relaxer-container shrink');
          }, holdTime);
        }, breatheTime);
      };

      const intervalId = setInterval(breathAnimation, totalTime);

      return () => clearInterval(intervalId);
    }
  }, [animationStarted, breatheTime, holdTime, totalTime]);

  const startBreath = () => {
    setAnimationStarted(true);
    setPointerContainerAnimation('running');
    setPointerAnimation('running');
  };

  return (
    <div className="w-full min-h-screen overflow-y-scroll text-white music-background border-r-2 border-red-400">
      <div className="w-full flex flex-flow-col justify-between mt-8 p-2 text-center leading-snug tracking-wide enriqueta-bold text-4xl ">
        <div className="w-[90%]">Deep Breathing</div>
        <div className="pr-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="mt-14 text-center">
        <div className={containerClass} id="relaxer-container">
          <div className="circle"></div>
          <div className='start-1'>
          <button onClick={startBreath}>
          <p id="relax-text" >
              <Play className="w-8 h-8 font-semibold" />
          </p>
          </button>
          <h3 className='text-white text-xl font-bold bottom-0 mt-10'>{text}</h3>
          </div>
          <div className="pointer-container" style={{ animationPlayState: pointerContainerAnimation }}>
            <span className="pointer" style={{ animationPlayState: pointerAnimation }}></span>
          </div>
          <div className="gradient-circle"></div>
        </div>

        
      </div>
    </div>
  );
};

export default DeepBreathing;

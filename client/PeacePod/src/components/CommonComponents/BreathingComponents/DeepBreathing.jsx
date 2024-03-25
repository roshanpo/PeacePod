import React, { useEffect, useState } from 'react';
import './relax.css';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

export const DeepBreathing = () => {
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById('relaxer-container');
    const text = document.getElementById('relax-text');

    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    const breathAnimation = () => {
      text.innerText = 'Breathe In!';
      container.className = 'relaxer-container grow';

      setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
          text.innerText = 'Breathe Out!';
          container.className = 'relaxer-container shrink';
        }, holdTime);
      }, breatheTime);
    };

    if (isRunning) {
      breathAnimation();
      const intervalId = setInterval(breathAnimation, totalTime);
      return () => clearInterval(intervalId);
    } else {
      container.className = 'relaxer-container';
      text.innerText = '';
    }
  }, [isRunning]);

  const startBreath = () => {
    setIsRunning(true);
  };

  const stopBreath = () => {
    setIsRunning(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="lg:ml-48 w-full min-h-screen text-white music-background border-r-2 border-red-400">
      <div className="w-full flex flex-flow-col justify-between mt-8 p-2 text-center leading-snug tracking-wide enriqueta-bold text-4xl ">
        <div className="w-[90%]">Deep Breathing</div>
        <div className="pr-4">
          <button onClick={goBack}>
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="mt-14 text-center">
        <div className="relaxer-container" id="relaxer-container">
          <div className="circle"></div>
          <p id="relax-text"></p>
          {
            isRunning && 
            <div className='pointer-container running'>
              <span className='pointer'></span>
            </div>
          }
          {/* <div className={`pointer-container ${isRunning ? 'running' : ''}`}>
            <div className='pointer'></div>
          </div> */}
          <div className="gradient-circle"></div>
        </div>

        <button className="mt-12" onClick={isRunning ? stopBreath : startBreath}>
          <p>
            <span className="font-semibold block">{isRunning ? 'Stop' : 'Start'}</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default DeepBreathing;

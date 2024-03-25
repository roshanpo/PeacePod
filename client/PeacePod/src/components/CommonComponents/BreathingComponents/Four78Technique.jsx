import React,{useEffect, useState} from 'react'
import './relax.css'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

export const Four78Technique = () => {
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    const breathAnimation = () => {
      text.innerText = 'Breathe In!';
      container.className = 'four-container fourgrow';

      setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
          text.innerText = 'Breathe Out!';
          container.className = 'four-container fourshrink';
        }, holdTime);
      }, breatheTime);
    };

    if(!isRunning){
      text.innerText = 'Start Breathing!';
    }
    else{
      breathAnimation();
      const interval = setInterval(breathAnimation, totalTime);

      return () => clearInterval(interval);
    }
    
  }, [isRunning]);

  const handleanimation = () =>{
    // alert('clicked')
    setIsRunning(true)
  }

  const stopanimation = () =>{
    // alert('clicked');
    setIsRunning(false)
  }

  const goBack = () =>{
    navigate(-1)
  }

  return (
    <>
    
    <div className='w-full h-screen lg:ml-52 background'>
      <button className='mt-10 px-4 py-2' onClick={goBack}> <MoveLeft /> </button>
    <div className="four-container w-[600px] mx-auto" id="container">
      <div className="four-circle"></div>
      <p id="text"></p>
      {
        isRunning &&
        <div className="four-pointer-container">
        <span className="four-pointer"></span>
      </div>
      }
      
      <div className="four-gradient-circle"></div>
    </div>
    
    <div className='mt-20 items-center text-center' >
    {isRunning && <Button className='bg-white text-black hover:bg-slate-300' onClick={stopanimation}>Stop</Button> } 
    {!isRunning && <Button className='bg-white text-black hover:bg-slate-300' onClick={handleanimation}>Start</Button>}
    </div>
    
    
     </div>
     </>
  );
}

import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

import AudioPlayer from "./AudioPlayer";
export default function PlayMusic() {
    const navigate = useNavigate();
    const location = useLocation();
    const audio = location.state?.audioFile;
    console.log(audio)
  return (
    <>
    <div className="bg-blur w-full justify-center flex flex-col gap-4">
      <div className="text-white text-right">
      <button onClick={()=>navigate(-1)}>
        <ArrowLeft />
    </button>
      </div>
    <div className="text-right text-white bg-slate-600 bg-transparent bottom-4">
    <AudioPlayer audioFile={audio}/>
    
    </div> 
    </div>
    </>
  )
}

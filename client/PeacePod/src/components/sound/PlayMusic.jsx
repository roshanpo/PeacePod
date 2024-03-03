import { ArrowLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import AudioPlayer from "./AudioPlayer";
import { useEffect } from "react";
import axios from "axios";
export default function PlayMusic() {
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    const fetchData = async()=>{
      const res = axios.get(`http://127.0.0.1:8000/music/${id}`)
    };
    fetchData();
  }, [])
  
    const navigate = useNavigate();
  return (
    <>
    <div className="bg-blur w-full justify-center flex flex-col gap-4">
      <div className="text-white text-right">
      <button onClick={()=>navigate(-1)}>
        <ArrowLeft />
    </button>
      </div>
    <div className="text-right text-white bg-slate-600 bg-transparent bottom-4">
    {/* <AudioPlayer audioFile={res}/> */}
    
    </div> 
    </div>
    </>
  )
}

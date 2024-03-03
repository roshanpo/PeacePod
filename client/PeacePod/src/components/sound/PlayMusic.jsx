import { ArrowLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Mic, MicOff, PauseCircle, Play, Volume1, Volume2 } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import WaveSurfer from "wavesurfer.js"

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#96fbf4",
  progressColor: "#c775e1",
  cursorColor: "black",
  responsive: true,
  height: 90,
  normalize: true,
  backend: "WebAudio",
  barWidth: 2,
  barGap: 4,
})

// helper function to format time
const formatTime = (seconds) => {
  let date = new Date(0)
  date.setSeconds(seconds)
  return date.toISOString().substr(11, 8)
}

export default function PlayMusic() {
  const { id } = useParams()
  const music_name = id;
  const navigate = useNavigate()
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [muted, setMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [audioFileName, setAudioFileName] = useState("")
  const [audioBlob, setAudioBlob] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/music/${music_name}`, {
        responseType: 'arraybuffer' // Set the response type to 'arraybuffer'
      });
      const audioBlob = new Blob([response.data], { type: 'audio/mp3' }); // Create Blob object from arraybuffer
      setAudioBlob(audioBlob);
    } catch (error) {
      console.error('Error fetching audio data:', error);
    }
  };

  fetchData();
}, []);


const audioURL = audioBlob ? URL.createObjectURL(audioBlob) : null;
console.log(audioURL)

  useEffect(() => {
    if (waveformRef.current){
    const options = formWaveSurferOptions(waveformRef.current)
    wavesurfer.current = WaveSurfer.create(options)

    // load audio file
    wavesurfer.current.loadBlob(audioBlob)

    // when Wavesurfer is ready
    wavesurfer.current.on("ready", () => {
      setVolume(wavesurfer.current.getVolume())
      setDuration(wavesurfer.current.getDuration())
      setAudioFileName(music_name.split("/").pop())
    })

    // updatecurrent time in state as audio plays
    wavesurfer.current.on("audioprocess", () => {
      setCurrentTime(wavesurfer.current.getCurrentTime())
    })
    // clean up event listners and destroy instance an unmount
    return () => {
      wavesurfer.current.un("audioprocess")
      wavesurfer.current.un("ready")
      wavesurfer.current.destroy()
    }
  }
  }, [music_name,waveformRef.current])

  const handlePlayPause = () => {
    setPlaying(!playing)
    wavesurfer.current.playPause()
  }

  const handleMuteUnmute = () => {
    setMuted(!muted)
    wavesurfer.current.setVolume(muted ? volume : 0)
  }

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume)
    wavesurfer.current.setVolume(newVolume)
    setMuted(newVolume === 0)
  }

  const handlevolumeDown = () => {
    handleVolumeChange(Math.max(volume - 0.1, 0))
  }

  const handlevolumeUp = () => {
    handleVolumeChange(Math.min(volume + 0.1, 1))
  }
  
  // const togglePlay = () => {
  //   if (audioRef.current.paused) {
  //     audioRef.current.play();
  //     setPlaying(true);
  //   } else {
  //     audioRef.current.pause();
  //     setPlaying(false);
  //   }
  // };
  
  return (
    <>
      <div className="bg-blur w-full justify-center flex flex-col gap-4">
        <div className="text-white text-right">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
        </div>
        <br /><br />
         <div>
      
    </div>
        <br /><br />
        <div>
      {/* {audioURL && (
        <div>
          <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
          <audio ref={audioRef} controls>
            <source src={audioURL} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )} */}
    </div>
    {audioURL && (
       <div className="text-right text-white bg-slate-600 bg-transparent bottom-4">
      
        <div className="text-center text-xl uppercase font-semibold my-2">
          Playing: {audioFileName.split(".")[0]}
        </div>
        <div ref={waveformRef} style={{ width: "100%" }}>
          {" "}
        </div>
        <div className="text-center my-2">
          <div className="flex gap-4 justify-center">
            <button className="" onClick={handlePlayPause}>
              {playing ? <Play /> : <PauseCircle />}
            </button>

            <button onClick={handleMuteUnmute}>
              {muted ? <MicOff /> : <Mic />}
            </button>

            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              onChange={(e) => {
                handleVolumeChange(parseFloat(e.target.value))
              }}
            />

            <button onClick={handlevolumeDown}>
              <Volume1 />
            </button>

            <button onClick={handlevolumeUp}>
              <Volume2 />
            </button>
          </div>

          <div className="font-semibold">
            {" "}
            Volume: {Math.round(volume * 100)}%
          </div>

          <div className="flex font-semibold text-lg justify-center gap-6">
            <div>Current Time: {formatTime(currentTime)}</div>
            <div>Duration : {formatTime(duration)}</div>
          </div>
        </div>
        
      </div> 
    )}
      </div>
    </>
  )
}

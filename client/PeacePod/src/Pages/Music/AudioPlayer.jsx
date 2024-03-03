import { Mic, MicOff, PauseCircle, Play, Volume1, Volume2 } from "lucide-react";
import { useState, useEffect, useRef } from "react"
import WaveSurfer from "wavesurfer.js"


const formWaveSurferOptions = (ref) => ({
    container : ref,
    waveColor: "#96fbf4",
    progressColor: "#c775e1",               
    cursorColor: 'black',
    responsive: true,
    height: 90,
    normalize: true,
    backend : 'WebAudio',
    barWidth : 2,
    barGap: 4,
})


// helper function to format time
const formatTime=(seconds)=>{
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

export default function AudioPlayer({ audioFile}) {
    // console.log('a'+audioFile)
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const [muted, setMuted] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioFileName, setAudioFileName] = useState('');

    // initialize websurfer

    useEffect (()=>{
        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        // load audio file
        wavesurfer.current.load(audioFile);

        // when Wavesurfer is ready
        wavesurfer.current.on('ready', ()=>{
            setVolume(wavesurfer.current.getVolume());
            setDuration(wavesurfer.current.getDuration());
            setAudioFileName(audioFile.split('/').pop());
        });

        // updatecurrent time in state as audio plays
        wavesurfer.current.on('audioprocess', ()=>{
            setCurrentTime(wavesurfer.current.getCurrentTime());
        });
        // clean up event listners and destroy instance an unmount
        return () =>{
            wavesurfer.current.un('audioprocess');
            wavesurfer.current.un('ready');
            wavesurfer.current.destroy();
        };
    }, [audioFile]);

    const handlePlayPause = () =>{
        setPlaying(!playing);
        wavesurfer.current.playPause();
    }

    const handleMuteUnmute = () =>{
        setMuted(!muted);
        wavesurfer.current.setVolume(muted? volume : 0);
    }

    const handleVolumeChange = (newVolume) =>{
        setVolume(newVolume);
        wavesurfer.current.setVolume(newVolume);
        setMuted(newVolume === 0);
    }

    const handlevolumeDown = () =>{
        handleVolumeChange(Math.max(volume-0.1, 0));
    }

    const handlevolumeUp = () =>{
        handleVolumeChange(Math.min(volume+0.1, 1));
    }
  return (
    <div className="">
        <div className="text-center text-xl uppercase font-semibold my-2">Playing: {(audioFileName.split('.'))[0]}</div>
        <div ref={waveformRef} style={{width: '100%'}}> </div>
        <div className="text-center my-2">
            {/* click button */}
            <div className="flex gap-4 justify-center">
            <button className="" onClick={handlePlayPause}>
                {playing? <Play /> : <PauseCircle />}
            </button>

            {/* mute button */}
            <button onClick={handleMuteUnmute}>
                {muted? <MicOff />: <Mic />}
            </button>

            {/* volume slider */}
            <input 
            type="range"
            id='volume'
            name='volume'
            min='0'
            max='1'
            step='0.05'
            value= {muted? 0: volume}
            onChange={(e)=>{handleVolumeChange(parseFloat(e.target.value))}}
            />

            {/* volume down button */}
            <button onClick={handlevolumeDown}>
                <Volume1 />
            </button>

            {/* volume up */}
            <button onClick={handlevolumeUp}>
                <Volume2 />
            </button>
            </div>

            <div className="font-semibold"> Volume: {Math.round(volume * 100)}%</div>

            <div className="flex font-semibold text-lg justify-center gap-6">
                <div>Current Time: {' '} {formatTime(currentTime)}</div> 
                <div>Duration : {formatTime(duration)}</div>  
            </div>
            
        </div>
    </div>
  )
}

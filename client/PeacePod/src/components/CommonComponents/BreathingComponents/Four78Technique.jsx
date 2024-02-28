import React, { useEffect, useState } from "react";
import { ArrowLeft, Play } from "lucide-react";

export const Four78Technique = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [containerClass, setContainerClass] = useState("four-container");
  const [animateCircleClass, setAnimateCircleClass] = useState("animate-circle");
  const [displayText, setDisplayText] = useState("Ready?");
  const [pointerContainerAnimation, setPointerContainerAnimation] = useState("paused");

  useEffect(() => {
    const totalTime = 19000;
    const breatheTime = 4000;
    const holdTime = 7000;

    function breathAnimation() {
      setDisplayText("Breathe In!");
      setContainerClass("four-container grow");
      setAnimateCircleClass("animate-circle animate-circle-inhale");

      setTimeout(() => {
        setDisplayText("Hold");

        setTimeout(() => {
          setDisplayText("Breathe Out!");
          setContainerClass("four-container shrink");
          setAnimateCircleClass("animate-circle animate-circle-exhale");
        }, holdTime);
      }, breatheTime);
    }

    if (buttonClicked) {
      breathAnimation();
      setPointerContainerAnimation("running");

      // Set an interval for the breathAnimation
      const intervalId = setInterval(breathAnimation, totalTime);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [buttonClicked]);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-y-scroll text-white music-background border-r-2 border-red-400">
        <div className="w-full flex flex-flow-col justify-between mt-8 p-2 text-center leading-snug tracking-wide enriqueta-bold text-4xl ">
          <div className="w-[90%]">4-7-8 Technique</div>
          <div className="pr-4">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft />
            </button>
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="four-breathing" id="four-breathing">
            <div className={containerClass} id="four-container">
              <div className="circle-four"></div>
              <div className={animateCircleClass} id="animate-circle"></div>
              <p>{displayText}</p>
              <div className="pointer-container-four" style={{ animationPlayState: pointerContainerAnimation }}>
                <span className="pointer-four"></span>
              </div>
              <div className="gradient-circle-four"></div>
            </div>

            <button
              className="start-technique-btn"
              onClick={handleButtonClick}
            >
              Begin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

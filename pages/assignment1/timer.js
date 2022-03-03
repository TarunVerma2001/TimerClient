import React, { useState, useRef, useEffect } from "react";

import Header from "../../components/Header";
import Countdown from "react-countdown";
import { addMinutes } from "date-fns";

function Timer() {
  const [changeTimer, setChangeTimer] = useState(false);
  const [timer, setTimer] = useState(new Date());
  const [breakTimer, setBreakTimer] = useState(new Date());

  const timerRef = useRef();
  const breakTimerRef = useRef();

  useEffect(() => {
    console.log(breakTimerRef.current);
  }, [breakTimerRef]);

  useEffect(() => {
    console.log(timerRef.current);
  }, [timerRef]);

  const onChangeTimer = () => {
    setChangeTimer(true);
    setBreakTimer(new Date());
  };

  return (
    <div>
      <Header />
      {/* <h1 onClick={() => onChangeTimer()}>changeTimer</h1> */}
      <div className="background h-screen w-full flex justify-center items-center">
        {!changeTimer && (
          <div>
            <div className="h-[300px] w-[300px] rounded-full bg-indigo-900 text-white text-xl flex items-center justify-center">
              <Countdown
                ref={timerRef}
                autoStart={false}
                date={addMinutes(timer, 1)}
                onComplete={() => onChangeTimer()}
              />
            </div>
            <div className="flex justify-between mt-10">
              <h1
                onClick={() => timerRef.current.start()}
                className="bg-gray-900 rounded-full px-4 py-2 text-white flex justify-center transform transition duration-150 ease-out hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
              >
                Start
              </h1>

              <h1
                onClick={() => timerRef.current.pause()}
                className="bg-gray-900 rounded-full px-4 py-2 text-white flex justify-center transform transition duration-150 ease-out hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
              >
                Pause
              </h1>
              <h1
                onClick={() => setTimer(new Date())}
                className="bg-gray-900 rounded-full px-4 py-2 text-white flex justify-center transform transition duration-150 ease-out hover:scale-105 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
              >
                Reset
              </h1>
            </div>
          </div>
        )}
        {changeTimer && (
          <div className="h-[300px] w-[300px] rounded-full bg-indigo-900 text-white text-xl flex items-center justify-center">
            <div>
              <h1>Break Timer</h1>
              <Countdown
                ref={breakTimerRef}
                date={addMinutes(breakTimer, 5)}
                onComplete={() => setChangeTimer(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timer;

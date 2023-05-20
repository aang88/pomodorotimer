import "./Timer.css";
import{useState,useEffect} from "react";




function Timer() {
    const [time,setTime]=useState(25);
    const [pause,setPause]=useState(true);
    const [timerState,setTimerState]=useState("Start");
    const [studyState,setFocusState]=useState("Focus!");
   
    useEffect(() => {
        // exit early when we reach 0
        if (!time){
            toggleStudyState();
        }
        if(pause === true){
            return;
        }
        const intervalId = setInterval(() => {
          setTime(time - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      }, [time,pause]);

    function toggleStudyState(){
        if(studyState=="Focus!"){
            setFocusState("Break Time");
            setTime(5);
            togglePause();
            return;
        }
        setFocusState("Focus!");
        setTime(25);
        togglePause();
        return;

    }

   
    function togglePause(){
        if(pause===false){
            setPause(true);
            setTimerState("Start");
            return;
        }
        setTimerState("Stop");
        setPause(false);
    }
    return (
       <div>
         <div className="timer-container">
            <section><div className="focus-text">{studyState}</div></section>
            <div className="time">{time}</div>
        </div>
        <button className="PauseTimer" onClick={togglePause}>{timerState}</button>

       </div>
    );
  }
  
  export default Timer;
  
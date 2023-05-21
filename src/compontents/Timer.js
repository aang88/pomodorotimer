import "./Timer.css";
import{useState,useEffect} from "react";
function Timer() {
    const [time,setTime]=useState(300);
    const [pause,setPause]=useState(true);
    const [timerState,setTimerState]=useState("Start");
    const [studyState,setFocusState]=useState("Focus!");
    const [formattedTime,setFormattedTime]=useState("00:00");
   
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
            convertToMinAndSec()
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

    function convertToMinAndSec(){
        var mins = Math.floor(time/60);
        var secs = time-(mins*60);
        setFormattedTime(("0" + mins).slice(-2)+":"+("0" + secs).slice(-2))
    }

    return (
       <div>
         <div className="timer-container">
            <section><div className="focus-text">{studyState}</div></section>
            <div className="time">{formattedTime}</div>
            <button className="PauseTimer" onClick={togglePause}>{timerState}</button>
        </div>
        

       </div>
    );
  }
  
  export default Timer;
  
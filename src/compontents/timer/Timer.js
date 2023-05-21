import "./Timer.css";
import{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import audio  from "../../sounds/click.mp3"
import audio2  from "../../sounds/done.mp3"



function Timer() {
    var studyTime = (25*60);
    var breakTime = 300;

    const [time,setTime]=useState(studyTime);
    const [pause,setPause]=useState(true);
    const [timerState,setTimerState]=useState("Start");
    const [studyState,setFocusState]=useState("Focus!");
    const [formattedTime,setFormattedTime]=useState(convertToMinAndSec(studyTime));
    const [streak,setStreak]=useState(0);
    const [streakDone,setStreakDone]=useState(false);
 
   
    useEffect(() => {
        // exit early when we reach 0
        if (time<0){
            toggleStudyState();
        }
        if(pause === true){
            return;
        }
        const intervalId = setInterval(() => {
            setTime(time - 1);
            setFormattedTime(convertToMinAndSec(time));
        }, 1000);
        return () => clearInterval(intervalId);
      }, [time,pause]);

    function toggleStudyState(){
        var done = new Audio(audio2);
        done.volume  = 0.5;
        done.play();
        if(studyState=="Focus!"){
            setFocusState("Break Time");
            setTime(breakTime);
            togglePause();
            return;
        }
        setFocusState("Focus!");
        setTime(studyTime);
        setStreak(streak+1);
        setTimeout(function(){ setStreakDone(true); }, 3000);
        setTimeout(function(){ setStreakDone(false); }, 3000);
        togglePause();
        return;

    }
    


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
      

    function togglePause(){
        var audio1 = new Audio(audio);
        audio1.play();
        // audio1.loop = false;
        if(pause===false){
            setPause(true);
            setTimerState("Start");
            return;
        }
        setTimerState("Stop");
        setPause(false);
    }


    function convertToMinAndSec(studyTime){
        var mins = Math.floor(studyTime/60);
        var secs = studyTime-(mins*60);
        return (("0" + mins).slice(-2)+":"+("0" + secs).slice(-2));
    }

    return (
       <div>
         <div className="timer-components">
             <div className="timer-container">
                 <section><div className="focus-text">{studyState}</div></section>
                <div className="time">{formattedTime}</div>
                <button className="PauseTimer" onClick={togglePause}>{timerState}</button>
         </div>
         <div className="streak-counter">
            <div>Streak:</div>
            <div className="streak-count">{streak} <FontAwesomeIcon icon={faFireFlameCurved} flip={streakDone} /></div> 
        </div>
        </div>
       </div>
    );
  }
  
  export default Timer;
  
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';



function App() {

  const [count,setCount]=useState(0);

  useEffect(() => {

      var currTime = new Date();
      // var currentOffset = currTime.getTimezoneOffset();
      //
      // var ISTOffset = 330;
      //
      // var ISTTime = new Date(currTime.getTime() + (ISTOffset + currentOffset)*60000);

      // var hoursIST = ISTTime.getHours();
      // var minutesIST = ISTTime.getMinutes();
      const currentTime = currTime.getHours();

      const execTime = 16;

      let timeLeft;
      if(currentTime < 16) {

          timeLeft = execTime*60*60*1000 - currTime*60*60*1000;
      } else {

          timeLeft = execTime*60*60*1000 + 86400000 - currentTime*60*60*1000;
      }

      setTimeout(function() {
        setInterval(function() {

          setCount(count+1);

      }, 86400000);
    }, timeLeft);

  },{});

  return (
    <div className="App">
      <h2>Show Count</h2>
      <h5>{count}</h5>
    </div>
  );
}

export default App;

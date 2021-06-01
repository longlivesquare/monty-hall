import { useEffect, useState } from 'react';
import Door from './Door';
import useSound from 'use-sound'
import doorImg from './images/door.webp'
import kevin from './images/kevin.png'
import car from './images/car.jpg'
import win from './sounds/W.mp3'
import './App.css';

function useForceUpate(){
  const [value, setValue] = useState(0);
  return() => setValue(value => value+1);
}

function App() {
  const [prizeDoor, setPrizeDoor] = useState(0); // Which door is the prize door
  const [numDoors, setNumDoors] = useState(3); // Number of doors to use
  const [selectedDoor, setSelectedDoor] = useState(-1); // Which door the contestant has selected
  //const [hiddenDoor, setHiddenDoor] = useState(-1); // The door that is not revealed when door is selected
  const [show, setShow] = useState(0); // Show: 0- Show doors, 1-Reveal one door,2-reveal all doors
  const [stats, setStats] = useState({switched: 0, stayed: 0, wins:0, plays:0})
  const [images, setImages] = useState(Array(numDoors).fill(doorImg))
  const forceUpdate = useForceUpate();

  useEffect(() => {
    randomizeDoors();
  },[])

  useEffect(() => {
    if(show === 1) {
      var hidden = selectedDoor === prizeDoor ? ((selectedDoor + Math.ceil(Math.random()*(numDoors-1))) % numDoors) : prizeDoor;
      for (var i = 0; i < numDoors; i++) {
        if (i !== hidden && i !== prizeDoor && i !== selectedDoor) {
          images[i] = kevin;
        }
      }
      forceUpdate();
    }
  }, [show])

  const [winner] = useSound(win);

  const randomizeDoors = () => {
    const pick = Math.floor(Math.random()*numDoors);
    setPrizeDoor(pick);
  }

  const chooseFirstDoor = (num) => {
    setSelectedDoor(num);
    //setHiddenDoor(handleHiddenDoor());
    setShow(1);
  }

  const chooseFinalDoor = (num) => {
    for(var i = 0; i < numDoors; i++) {
      if (i=== prizeDoor) {
        images[i] = car;
      } else {
        images[i] = kevin;
      }
    }
    if (num === prizeDoor) {
      winner();
      if(num === selectedDoor){
        console.log("Stay winner");
        setStats(prevStats => ({...prevStats, stayed:prevStats.stayed+1, wins:prevStats.wins+1}))  
      }
      else {
        console.log("Switch winner");
        setStats(prevStats => ({...prevStats, switched:prevStats.switched+1, wins:prevStats.wins+1}))
      }
    }

    setStats(prevStats => ({...prevStats, plays:prevStats.plays+1}))
    setSelectedDoor(num);
    setShow(2);
  }

const reset = () => {
  randomizeDoors();
  //setHiddenDoor(-1);
  setImages(Array(numDoors).fill(doorImg))
  setSelectedDoor(-1);
  setShow(0);
}

  return (
    <div className="monty-hall-main">
      <h1>Welcome to the Monty Hall Show</h1>
      <p>Behind one of these doors is a car. If you can correctly choose that door, you get it!</p>
      <div className="doors">
        {[...Array(numDoors).keys()].map((number) => {
          return(
          <Door 
            key={number}
            number={number}
            image={images[number]}
            click={show === 0 ? chooseFirstDoor : show === 1 ? chooseFinalDoor : reset}
          />
          )
        })}
      </div>
      {show === 1 ?<h3>The host has revealed one of the other doors. Do you want to switch?</h3> : null}
      <button onClick={reset}>Restart</button>
      <h2>Stats:</h2>
      Total plays: {stats.plays}<br />
      Total Wins: {stats.wins}<br />
      Wins by staying: {stats.stayed}<br />
      Wins by switching: {stats.switched}
    </div>
  );
}

export default App;

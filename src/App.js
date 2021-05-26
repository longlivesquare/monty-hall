import { useEffect, useState } from 'react';
import Door from '../Door';
import './App.css';



function App() {
  const [prizeDoor, setPrizeDoor] = useState(0); // Which door is the prize door
  const [doorToReveal, setDoorToReveal] = useState(1); // Door to reveal after selection
  const [numDoors, setNumDoors] = useState(3); // Number of doors to use
  const [selectedDoor, setSelectedDoor] = useState(-1); // Which door the contestant has selected
  const [show, setShow] = useState(0); // Show: 0- Show doors, 1-Reveal one door,2-reveal all doors

  useEffect(() => {
    randomizeDoors();
  },[])

  const randomizeDoors = () => {
    setPrizeDoor(Math.floor(Math.random()*numDoors));
    setDoorToReveal((prizeDoor + Math.floor(Math.random()*2)+1)%numDoors)
  }

  return (
    <div>
      <h1>Welcome to the Monty Hall Show</h1>
      <p>Behind one of these doors is a car. If you can correctly choose that door, you get it!</p>
      <div className="doors">
        {Array(numDoors).map((number) => {
          <Door 
            key={number}
            
          />
        })}
      </div>
    </div>
  );
}

export default App;

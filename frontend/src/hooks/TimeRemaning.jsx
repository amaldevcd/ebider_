import { useState, useEffect } from 'react';

function AuctionCounter({ initialTime }) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime*60*60);
   
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours=Math.floor(time/3600)
    const minutes = Math.floor((time % 3600)/60);
    const seconds = Math.floor(time % 60);
    //console.log(seconds)
    return `${hours.toString().padStart(2, '0')}H:${minutes.toString().padStart(2, '0')}M:${seconds.toString().padStart(2, '0')}S`;
  }

  
  return (
    <div>
       {formatTime(timeRemaining)}
    </div>
  );
   
  
}

export default AuctionCounter;
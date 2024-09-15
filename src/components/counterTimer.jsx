import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function MyTimer() {
   
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      
      const intervalId = setInterval(() => {
        setValue(prevValue => {
         
          const newValue = prevValue - 1;
          return newValue < 0 ? 60 : newValue; 
        });
      }, 1000);
  
      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }, []); 
  
    return (
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar
          value={value}
          maxValue={60} 
          styles={buildStyles({
            pathColor: `rgba(61, 198, 193)`,
            textColor: 'rgb(61, 198, 193)'
          })}
          text={value}
        />
      </div>
    );
}

export default MyTimer;
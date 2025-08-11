import React, { useEffect, useState } from 'react';
import './App.css';
import ripped from './ripped.png';
import left from './left.png';
import right from './right.png';

function App() {
  const [isScrollingBlocked, setIsScrollingBlocked] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrollingBlocked(false); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (isScrollingBlocked) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  }, [isScrollingBlocked]);

  return (
    <div className="app">
      <div className="firstPage">
        <div className='convert'>
          <img className='left' src={left} alt="Left" />
          <img className='right' src={right} alt="Right" />
        </div>
        <div className='mainText'>
          <h1 className=''>WEDDING </h1>
          <h1 className=''>DAY </h1>
          <div className='des'>
            <a>Mark & Lera</a>
            <a>03.10.2025</a>
          </div>
        </div>
        <img className='ripped' src={ripped} alt="Ripped" />
      </div>

      <div className='second'>
        <div className='secondtext'>
          <div className='inviteTitle'>
            <h1>WEDDING<br/>INVINTATION</h1>
          </div>
          <div className='inviteText'>
            <a>
              Мы давно ждали момента, когда вместе с вами сможем разделить самый важный и счастливый день в нашей жизни - день нашей свадьбы!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
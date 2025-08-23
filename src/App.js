import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import ripped from './ripped.png';
import left from './left.png';
import right from './right.png';
import lera from './leraRamka.png';
import mark from './markRamka.png';
import flower from './flower.png';
import tree from "./Tree.JPG"
import heart from "./heart.png"

function App() {
  const [isScrollingBlocked, setIsScrollingBlocked] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const flowerAnimation = useSpring({
    transform: scrollY > 950 ? 'translateX(0)' : 'translateX(-100vw)',
    opacity: scrollY > 950 ? 1 : 0,
  });

   const heartAnimation = useSpring({
    opacity: scrollY > 3400 ? 1 : 0, // Укажите значение прокрутки, при котором сердце станет видимым
    config: { duration: 700 }, // Длительность анимации
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrollingBlocked(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isScrollingBlocked ? 'hidden' : 'auto';
  }, [isScrollingBlocked]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

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
            <h1>WEDDING<br />INVINTATION</h1>
          </div>
          <div className='inviteText'>
            <a>
              Мы давно ждали момента, когда вместе с вами сможем разделить самый важный и счастливый день в нашей жизни - день нашей свадьбы!
            </a>
          </div>
        </div>
      </div>

      <div className='third'>
        <div className='rippedContainer'>
          <div className='childImg'>
            <img className='leraRamka' src={lera} alt="Lera" />
            <img className='markRamka' src={mark} alt="Mark" />
          </div>
        </div>
      </div>
      <div className='four'>
        <img className='rippedFour' src={ripped} alt="Ripped" />
        <animated.img style={flowerAnimation} className='flower' src={flower} alt='flower' />
        <a className='fourText'>
          Наша Свадьба без вас не будет такой счастливой, уютной и веселой! Мы будем рады, если вы проведете этот особенный день с нами.
        </a>
        <img className='rippedFourBottom' src={ripped} alt="Ripped" />
      </div>
      <div className='place'>
        <h1 className='placeTitle'>PLACE</h1>
        <p className='placetext'>
          Cвадьба пройдет в Агроэкоусадьбе «Три колодца»
          Она находится по адресу:
          Брестская область, Каменецкий район , деревня Баранки, дом 3
        </p>
        <img className='tree' src={tree} alt='tree' />
      </div>
      <div className='program'>
        <h1 className='titleProgramm'>
          WEDDING<br /> PROGRAM
        </h1>
        <div className='programSections'>
          <p className='section'>
            <span className='time'>14:00-14:30</span>
            <span className='divider'></span>
            <span className='event'>Сбор гостей</span>
          </p>
          <p className='section'>
            <span className='time'>14:30-21:00</span>
            <span className='divider'></span>
            <span className='event'>Начало, Банкет </span>
          </p>
          <p className='section'>
            <span className='time'>21:00-22:00</span>
            <span className='divider'></span>
            <span className='event'>Торт, огни</span>
          </p>
        </div>
      </div>
      <div className='togPhoto'>
        <img className='rippedFour' src={ripped} alt="Ripped" />
        <img className='rippedFourBottom' src={ripped} alt="Ripped" />
      </div>
      <div className='details'>
        <h1 className='detailsTitle'>DETAILS</h1>
        <span className='detailsText'>
          Пожалуйста, не дарите нам цветы, так как мы не успеем насладиться их красотой. Если вы хотите сделать нам комплимент,
          замените букет кормом для домашних животных (котов и собак), чтобы бы мы могли отвезти в приют и покормить братьев наших меньших.❤️🐶🐱
        </span>
        <span className='dividerSecond'></span>
        <span className='detailsText'>
          Будем благодарны, если вы воздержитесь от криков «Горько» на празднике, ведь поцелуй- это знак выражения чувств, он не может быть по заказу.
        </span>
      </div>
      <div className='seeU'>
        До встречи в октябре <br/> 03.10
      </div>
      <div className='last'>
        <animated.img style={heartAnimation} className='heart' src={heart} alt='heart'/>
        <img className='rippedFour' src={ripped} alt="Ripped" />
       
      </div>
    </div>
  );
}

export default App;
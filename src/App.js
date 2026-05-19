import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import ripped from './ripped.WebP';
import left from './left.WebP';
import right from './right.WebP';
import lera from './leraRamka.WebP';
import mark from './markRamka.WebP';
import flower from './flower.WebP';
import tree from "./place.png";
import heart from "./heart.WebP";
import mainph from './main.png'
function App() {
  const [isScrollingBlocked, setIsScrollingBlocked] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isArrowVisible, setArrowVisible] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [animateLeftRight, setAnimateLeftRight] = useState(false); // Состояние для анимации

  const flowerAnimation = useSpring({
    transform: imagesLoaded && scrollY > 700 ? 'translateX(0)' : 'translateX(-100vw)',
    opacity: imagesLoaded && scrollY > 700 ? 1 : 0,
  });

  const heartAnimation = useSpring({
    opacity: scrollY > 3400 ? 1 : 0,
    config: { duration: 700 },
  });

  const leftAnimation = useSpring({
    transform: animateLeftRight ? 'translateX(-50px)' : 'translateX(0)',
    config: { tension: 220, friction: 20 },
  });

  const rightAnimation = useSpring({
    transform: animateLeftRight ? 'translateX(50px)' : 'translateX(0)',
    config: { tension: 220, friction: 20 },
  });

  useEffect(() => {
    const images = [ripped, left, right, lera, mark, flower, tree, heart];
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === images.length) {
        setImagesLoaded(true);
        setAnimateLeftRight(true); // Запуск анимации после загрузки изображений
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 0 && isArrowVisible) {
        setArrowVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isArrowVisible]);

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
          <animated.img style={leftAnimation} className='left' src={left} alt="Left" />
          <animated.img style={rightAnimation} className='right' src={right} alt="Right" />
        </div>
        <div className='mainText'>
          <img className='mainph' src={mainph} alt='tree' />
          <div className='wedday'>
            <h1 className=''>Wedding </h1>
            <h1 className=''>Day </h1>
          </div>
        </div>
        <div className='des'>
            <a className='WadimUlya'>Wadim & Uliana</a>
            <a>03.10.2025</a>
          </div>
        {isArrowVisible && (
          <div className="scroll-indicator">
            <div className="arrow-down"></div>
          </div>
        )}
      </div>

      <div className='second'>
        <div className='secondtext'>
          <div className='inviteTitle'>
            <h1 className='inviteTitle'>Wedding<br />Invintation</h1>
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
        </div>
      </div>
      <div className='four'>
        
        <animated.img style={flowerAnimation} className='flower' src={flower} alt='flower' />
        <div className='border'>
        <a className='fourText'>
          Наша Свадьба без вас не будет такой счастливой, уютной и веселой! Мы будем рады, если вы проведете этот особенный день с нами.
        </a>
        </div>
      </div>
      <div className='place'>
        <h1 className='placeTitle'>Location</h1>
        <img className='tree' src={tree} alt='tree' />
        <p className='placetext'>
          Cвадьба пройдет в Агроэкоусадьбе «Три колодца»
          Она находится по адресу:
          Брестская область, Каменецкий район, деревня Баранки, дом 3
        </p>
      </div>
      <div className='program'>
        <div className='border'>
        <h1 className='titleProgramm'>
          Wedding<br /> Program
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
      </div>
      <div className='togPhoto'>
      </div>
      <div className='details'>
        <h1 className='detailsTitle'>Details</h1>
        <span className='detailsText'>
          Пожалуйста, не дарите нам цветы, так как мы не успеем насладиться их красотой. Если вы хотите сделать нам комплимент,
          замените букет кормом для домашних животных (котов и собак), чтобы бы мы могли отвезти в приют и покормить братьев наших меньших.❤️🐶🐱
        </span>
        <span className='dividerSecond'></span>
        <span className='detailsText'>
          Будем благодарны, если вы воздержитесь от криков «Горько» на празднике, ведь поцелуй- это знак выражения чувств, он не может быть по заказу.
        </span>
      </div>
      <div className='dress'>
        <div className='program'>
          <div className='border'>
        <h1 className='titleDress'>
          Dress code
        </h1>
        <div className='dressSections'>          
          <p className='dressText'>
            Будем рады видеть вас в цветах, которые мы выбрали для праздника - 
            это добавит особое настроение.
          </p>
          </div>
        </div>
        </div>
      </div>
      <div className='seeU'>
        До встречи в октябре <br /> 03.10
      </div>
      <div className='last'>
        {/* <animated.img style={heartAnimation} className='heart' src={heart} alt='heart' /> */}
      </div>
    </div>
  );
}

export default App;
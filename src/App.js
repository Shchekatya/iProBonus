import flame from './pics/flame.svg';
import figma from './pics/figma.svg';
import battery from './pics/battery.svg';
import button from './pics/button.svg';
import infButton from './pics/inf-button.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { useAccessToken } from './utils/useAccessToken';
import { useBonus } from './utils/useBonus';


function App() { 
  const token = useAccessToken();
  const bonus = useBonus(token);

  let date;
  if (bonus) {
    date=bonus.dateBurning.split("T")[0].split("-")    
  }

  return ( 
    <div className = "App" >
    <header className = "header" >
      <div className='figma'>
        <img src={figma} alt='figma'/>
        <p className='figma__text'>Figma</p>
      </div>
      <div className='time'>
        <p className='time__text'>9:42 AM</p>
      </div>
      <div className='battery'>
        <p className='battery__text'>42%</p>
        <img src={battery} alt='battery'/>
      </div>
    </header >
    <main>
      <div className = "inf" >
        <p className='inf__logo'>Логотип</p>        
        <button className='inf__button'><img src={infButton}/></button>
      </div>   
      <div className = "background" ></div>  
     
        <div className = "bonus" >
        {bonus &&
        <>
        <div className='bonus-info'>
          <p className='bonus-info__text'>
          {bonus.currentQuantity} бонусов
          </p>
          <div className='bonus-info-burn'>
            <p className='bonus-info-burn__when'>
            {date[2]}.{date[1]} сгорит
            </p>
            <img src={flame} className="bonus-info-burn__icon" alt="flame icon" />
            <p className='bonus-info-burn__count'>
            {bonus.forBurningQuantity} бонусов
            </p>
          </div>
        </div>
        <button className='bonus-button'><img src={button}/></button>
        </>
      }
       {!bonus && <p className='bonus-info__text'>Нет данных</p>}
      </div>    
    
    </main>
    </div>
  );
}

export default App;
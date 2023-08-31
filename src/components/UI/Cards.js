import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import AppRoutes from '../../constants/AppRoutes';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/about.jpg'
              text='More about me'
              label='Bio'
              path={AppRoutes.ABOUT}
            />
            <CardItem
              src='images/diy.jpg'
              text='DIY projects'
              label='DIY'
              path={AppRoutes.DIY}
            />
            <CardItem
              src='images/work.jpg'
              text='Practice projects'
              label='React/JS'
              path={AppRoutes.PROJECTS}
            />
            <CardItem
              src='images/music.jpg'
              text='Music, dance & other'
              label='Hobby'
              path={AppRoutes.HOBBY}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Select a Genre</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://dgwh4hty77sxy.cloudfront.net/c/10259-medium_zoomcrop/Chet%20Baker.jpg'
              text='Jazz'
              path='/services'
            />
            <CardItem
              src='https://www.alternativenation.net/wp-content/uploads/2018/03/pavementnew.jpg'
              text='Indie Rock'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://static01.nyt.com/images/2019/01/31/books/31bookabdurraqib2-print/merlin_149954049_7b7f5ac7-d7e3-4330-9c58-a2909fe9b6be-superJumbo.jpg'
              text='Hip-hop'
              path='/sign-up'
            />
            <CardItem
              src='https://images-na.ssl-images-amazon.com/images/I/81XB1azl7HL._SL1425_.jpg'
              text='Pop'
              path='/products'
            />
            <CardItem
              src='https://media.pitchfork.com/photos/592c56edeb335119a49f0d84/master/w_692,h_461,c_limit/5ed7c3d9.jpg'
              text='Folk'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

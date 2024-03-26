import React from 'react'
import { search } from './Icon-image'
import TrendsForYou from './TrendsForYou'
import TrendsForItem from './TrendsForItem';
import setting from '../icons/Settings.svg';
import ShowMore from './ShowMore';
import Follows from './Follows';
import FollowsTrend from './FollowsTrend';
import { tweet_data } from './Data';

function Trends() {
  
  const data = [];

  for(let i=0; i<4; i++){

    data.push(<TrendsForYou key={i}/>)

  }

  return (
    <div className='trends'>
      <div className='trends-seach'>
          <div className='imageSearch'>
              <img src={search} />
          </div>

          <div className='inputHolde'>
            <input type='text' placeholder='Seach Twitter' />
          </div>
      </div>

      

      <div className='data'>

         <TrendsForItem nom="Trends For you" image={setting} />
         {data}
         <ShowMore name="Show more" />
      </div>

      <div className='data'>

      <Follows name="Who to follow"/>
      {
        tweet_data.map((param, index) => {

          return index < 3? <FollowsTrend param={param}  />:''
        } )
      }
      </div>
     
    </div>
    
  )
}

export default Trends

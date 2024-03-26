import React from 'react'
import more from '../icons/More-2.svg';

export function TrendsForYou() {

  return (
    <div className='trendsforyou'>
        <div className='spanTrends'>
            <span className='trendTurkey'>Trending in Turkey</span>
            <span>#SQUID</span>
            <span className='trendTurkey'>2.006 Tweets</span>
        </div>
        <div>
            <img src={more} />
        </div>

    </div>
    
  )
}

export default TrendsForYou

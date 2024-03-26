import React from 'react'

function FollowsTrend({param}) {
    // console.log(param)
  return (
    <div className='followsTrends'>
      <div className='follow'>
        <img src={param.avatar} className='imageParam' />

      <div className='followsTwo'>
            <span>{param.tweet_content.tweet_body.tweet_title.tweet_title_author}</span>
            <img src={param.tweet_content.tweet_body.tweet_title.image} />
            <p className='followsParagraphe'>{param.tweet_content.tweet_body.tweet_title.tweet_title_details}</p>
            
      </div>

    </div>
         
         <button className='btn'>Follow</button>
    </div>
  )
}

export default FollowsTrend

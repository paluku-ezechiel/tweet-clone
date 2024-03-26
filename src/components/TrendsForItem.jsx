import React from 'react'

function TrendsForItem({nom, image}) {
  return (
    <div className='trendsItem'>
      <span>{nom}</span>
      <img src={image} />
    </div>
  )
}

export default TrendsForItem

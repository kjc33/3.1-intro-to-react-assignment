import React from 'react'

function Headshot({ imgSrc, imgAlt, imgWidth, imgHeight }) {
  return (
    <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
  )
}

export default Headshot
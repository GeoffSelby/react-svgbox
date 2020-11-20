import React from 'react'

const HeroSolid = ({ className, icon, fillColor, ...rest }) => {
  return (
    <img
      {...rest}
      className={className}
      src={`//s.svgbox.net/hero-solid.svg?fill=${fillColor}#${icon}`}
    />
  )
}

export default HeroSolid

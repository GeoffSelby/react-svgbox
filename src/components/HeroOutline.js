import React from 'react'

const HeroOutline = ({ className, icon, fillColor, ...rest }) => {
  return (
    <img
      {...rest}
      className={className}
      src={`//s.svgbox.net/hero-outline.svg?fill=${fillColor}#${icon}`}
    />
  )
}

export default HeroOutline

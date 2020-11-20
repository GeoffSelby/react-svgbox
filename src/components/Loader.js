import React from 'react'

const Loader = ({ className, icon, fillColor, ...rest }) => {
  return (
    <img
      {...rest}
      className={className}
      src={`//s.svgbox.net/loaders.svg?fill=${fillColor}#${icon}`}
    />
  )
}

export default Loader

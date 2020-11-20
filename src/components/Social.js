import React from 'react'

const Social = ({ className, icon, fillColor, ...rest }) => {
  return (
    <img
      {...rest}
      className={className}
      src={`//s.svgbox.net/social.svg?fill=${fillColor}#${icon}`}
    />
  )
}

export default Social

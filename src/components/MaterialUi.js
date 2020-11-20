import React from 'react'

const MaterialUi = ({ className, icon, fillColor, ...rest }) => {
  return (
    <img
      {...rest}
      className={className}
      src={`//s.svgbox.net/materialui.svg?fill=${fillColor}#${icon}`}
    />
  )
}

export default MaterialUi

import React from 'react'

export { default as Pattern } from './components/Pattern'
const Icon = ({ className, iconSet, icon, fillColor, ...rest }) => {
  return (
    <img
      {...rest}
      className={className}
      src={`//s.svgbox.net/${iconSet}.svg?fill=${fillColor}#${icon}`}
    />
  )
}

export default Icon

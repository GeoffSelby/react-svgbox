import React from 'react'

export { default as Pattern } from './components/Pattern'
export { default as Social } from './components/Social'
export { default as MaterialUi } from './components/MaterialUi'
export { default as HeroOutline } from './components/HeroOutline'
export { default as HeroSolid } from './components/HeroSolid'
export { default as Loader } from './components/Loader'
export { default as Flag } from './components/Flag'

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

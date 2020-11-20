import React from 'react'

const Flag = ({ className, flag, quality = 'high', ...rest }) => {
  const definition = quality === 'high' ? 'hd' : 'ld'
  return (
    <img
      {...rest}
      className={className}
      src={`//s.svgbox.net/flags-${definition}.svg?#${flag}`}
    />
  )
}

export default Flag

import React from 'react'

const Pattern = ({
  children,
  className,
  pattern,
  fillColor,
  bgColor,
  bgSize,
  ...rest
}) => {
  const styles = {
    backgroundImage: `url(//s.svgbox.net/heropatterns.svg?fill=${fillColor}#${pattern})`,
    backgroundColor: bgColor,
    backgroundSize: bgSize
  }

  return (
    <div className={className} style={styles} {...rest}>
      {children}
    </div>
  )
}

export default Pattern

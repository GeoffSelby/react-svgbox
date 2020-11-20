import React from 'react'
import { render, screen } from '@testing-library/react'
import { HeroSolid } from '../index'

describe('HeroSolid Component', () => {
  it('renders an img tag with the proper src url', () => {
    render(
      <HeroSolid
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='adjustments'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute(
      'src',
      '//s.svgbox.net/hero-solid.svg?fill=purple-600#adjustments'
    )
  })

  it('renders an img tag with the proper class', () => {
    render(
      <HeroSolid
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='adjustments'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('example-class')
  })
})

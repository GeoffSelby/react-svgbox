import React from 'react'
import { render, screen } from '@testing-library/react'
import { HeroOutline } from '../index'

describe('HeroOutline Component', () => {
  it('renders an img tag with the proper src url', () => {
    render(
      <HeroOutline
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
      '//s.svgbox.net/hero-outline.svg?fill=purple-600#adjustments'
    )
  })

  it('renders an img tag with the proper class', () => {
    render(
      <HeroOutline
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

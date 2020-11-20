import React from 'react'
import { render, screen } from '@testing-library/react'
import { Social } from '../index'

describe('Social Component', () => {
  it('renders an img tag with the proper src url', () => {
    render(
      <Social
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='about-dot-me'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute(
      'src',
      '//s.svgbox.net/social.svg?fill=purple-600#about-dot-me'
    )
  })

  it('renders an img tag with the proper class', () => {
    render(
      <Social
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='about-dot-me'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('example-class')
  })
})

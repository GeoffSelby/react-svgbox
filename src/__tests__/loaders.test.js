import React from 'react'
import { render, screen } from '@testing-library/react'
import { Loader } from '../index'

describe('Loader Component', () => {
  it('renders an img tag with the proper src url', () => {
    render(
      <Loader
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='three-dots'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute(
      'src',
      '//s.svgbox.net/loaders.svg?fill=purple-600#three-dots'
    )
  })

  it('renders an img tag with the proper class', () => {
    render(
      <Loader
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='three-dots'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('example-class')
  })
})

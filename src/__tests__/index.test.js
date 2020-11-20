import React from 'react'
import { render, screen } from '@testing-library/react'
import Icon from '../index'

describe('Icon Component', () => {
  it('renders an img tag with the proper src url', () => {
    render(
      <Icon
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        iconSet='loaders'
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
      <Icon
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        iconSet='loaders'
        icon='three-dots'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('example-class')
  })
})

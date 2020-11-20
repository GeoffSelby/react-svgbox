import React from 'react'
import { render, screen } from '@testing-library/react'
import { Pattern } from '../index'

describe('Pattern Component', () => {
  it('renders a div tag with the proper css values', () => {
    render(
      <Pattern
        data-testid='icon'
        className='example-class'
        pattern='4-point-stars'
        fillColor='purple-600'
        bgColor='#fff'
        bgSize='32px'
      >
        <h1>Hello World</h1>
      </Pattern>
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle(
      'background-image: url(//s.svgbox.net/heropatterns.svg?fill=purple-600#4-point-stars)'
    )
    expect(element).toHaveStyle('background-color: #fff')
    expect(element).toHaveStyle('background-size: 32px')
  })

  it('renders a div tag with the proper class', () => {
    render(
      <Pattern
        data-testid='icon'
        className='example-class'
        pattern='4-point-stars'
        fillColor='purple-600'
        bgColor='#fff'
        bgSize='32px'
      >
        <h1>Hello World</h1>
      </Pattern>
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('example-class')
  })

  it('renders a div tag with children', () => {
    render(
      <Pattern
        data-testid='icon'
        className='example-class'
        pattern='4-point-stars'
        fillColor='purple-600'
        bgColor='#fff'
        bgSize='32px'
      >
        <h1>Hello World</h1>
      </Pattern>
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toContainHTML('<h1>Hello World</h1>')
  })
})

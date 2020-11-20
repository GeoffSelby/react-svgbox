import React from 'react'
import { render, screen } from '@testing-library/react'
import { MaterialUi } from '../index'

describe('MaterialUi Component', () => {
  it('renders an img tag with the proper src url', () => {
    render(
      <MaterialUi
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='arrow_back'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute(
      'src',
      '//s.svgbox.net/materialui.svg?fill=purple-600#arrow_back'
    )
  })

  it('renders an img tag with the proper class', () => {
    render(
      <MaterialUi
        data-testid='icon'
        className='example-class'
        fillColor='purple-600'
        icon='arrow_back'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('example-class')
  })
})

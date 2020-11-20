import React from 'react'
import { render, screen } from '@testing-library/react'
import { Flag } from '../index'

describe('Flag Component', () => {
  it('renders an img tag with the proper src url', () => {
    render(
      <Flag
        data-testid='icon'
        className='example-class'
        flag='us'
        quality='high'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('src', '//s.svgbox.net/flags-hd.svg?#us')
  })

  it('renders an img tag with the proper class', () => {
    render(
      <Flag
        data-testid='icon'
        className='example-class'
        flag='us'
        quality='high'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('example-class')
  })

  it('renders low def flag when quality prop is not high', () => {
    render(
      <Flag
        data-testid='icon'
        className='example-class'
        flag='us'
        quality='low'
      />
    )

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('src', '//s.svgbox.net/flags-ld.svg?#us')
  })

  it('renders high def flag when quality prop is not passed', () => {
    render(<Flag data-testid='icon' className='example-class' flag='us' />)

    const element = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('src', '//s.svgbox.net/flags-hd.svg?#us')
  })
})

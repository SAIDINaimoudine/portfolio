import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Header from './Header'

describe('Header component', () => {
  it('should render navModal', () => {
    const { debug } = render(<Header />)
    const closeBtn = screen.getByRole('button', { name: /open menu/i })

    fireEvent.click(closeBtn)
    const navModal = screen.getByRole('nav-modal')

    debug()
    expect(navModal).not.toHaveAttribute('hidden')
    expect(navModal).toBeInTheDocument()
  })

  it('should close the menu', () => {
    const { debug } = render(<Header />)
    const closeBtn = screen.getByRole('button', { name: /close menu/i })

    fireEvent.click(closeBtn)
    const navModal = screen.getByRole('nav-modal')

    debug()
    expect(navModal).toHaveClass('hidden')
  })
})

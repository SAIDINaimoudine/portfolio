import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Project from './Project'

describe('Project component with no projects', () => {
  it('should render text when no content in component', () => {
    render(<Project />)
    const textElement = screen.getByText(/No projects found/i)
    expect(textElement).toBeInTheDocument()
  })

  it('should disable button when one or no projects', () => {
    render(<Project />)
    const buttonLeft = screen.getByRole('button', { name: /scroll left project caroussel/i })
    const buttonRight = screen.getByRole('button', { name: /scroll right project caroussel/i })

    expect(buttonLeft).toBeDisabled()
    expect(buttonRight).toBeDisabled()
  })
})

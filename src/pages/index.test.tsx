import React from 'react'
import { render } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  const data = {}

  const pageContext = {
    repos: [
      {
        name: 'hello',
        full_name: 'kilbot/hello'
      }
    ]
  }

  it('renders correctly from data file values', () => {
    const { container } = render(<Home data={data} pageContext={pageContext} />)
    expect(container.firstChild).toBeInTheDocument()
  })
})

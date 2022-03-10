import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

test('render footer', () => {
    render(<Footer/>)
    expect(screen.getByText('@Eshop 2022')).toBeInTheDocument()
})
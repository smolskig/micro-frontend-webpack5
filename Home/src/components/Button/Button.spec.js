import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.';
it('Should click on button and show a alert', () => {
    render(<Button></Button>)

    const btn = screen.getByText("Default")
    btn.click()
    
    expect(screen.getByText("Clicked")).toBeInTheDocument()
});
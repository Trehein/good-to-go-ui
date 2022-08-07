import React from "react"
import { fireEvent, render, screen } from '@testing-library/react'
import {Button} from '../Button'
 
describe("Button", () => {
    const mockButtonOnClick = jest.fn()

    beforeEach(() =>
        render(
            <Button onClick={mockButtonOnClick}>
                <div>This is a Button</div>
            </Button>
        )
    )
    it("Renders a Button Component", () => {
        const buttonText = screen.getByText('This is a Button')
        expect(buttonText).toBeInTheDocument;
    })
    it('fires a function on click', () => {
        const buttonText = screen.getByText('This is a Button')
        fireEvent.click(buttonText)
        expect(mockButtonOnClick).toHaveBeenCalled()
    })
})

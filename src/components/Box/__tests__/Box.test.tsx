import { render, screen } from "@testing-library/react"
import React from 'react'
import { Box } from '../Box'

describe("Box Component", () => {
    it("renders the box component with content", () => {
        render(
            <Box>
                Box Component
            </Box>
        )
        const boxText = screen.getByText('Box Component')
        expect(boxText).toBeVisible
    })
})
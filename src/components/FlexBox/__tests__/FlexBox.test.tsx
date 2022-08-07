import { render, screen } from "@testing-library/react"
import React from 'react'
import { FlexBox } from "../FlexBox"

describe("FlexBox Component", () => {
    it("Render the FlexBox Component", () => {
        render(
            <FlexBox>
                FlexBox Content
            </FlexBox>
        )
        const flexBoxContentText = (screen.getByText('FlexBox Content'))
        expect(flexBoxContentText).toBeInTheDocument
    })
})

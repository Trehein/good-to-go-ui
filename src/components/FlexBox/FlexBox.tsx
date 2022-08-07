import React, { Dispatch } from 'react'
import { flexBoxStyles, FlexBoxCustomStyleObj } from './flexBoxStyles'

export type FlexBoxProps = {
    children: React.ReactNode,
    customStyleObj?: FlexBoxCustomStyleObj,
}

export const FlexBox: React.FC<FlexBoxProps> = (props) => {
    const { children, customStyleObj } = props
    return (
        <div style={flexBoxStyles(customStyleObj)}>
            {children}
        </div>
    )
}
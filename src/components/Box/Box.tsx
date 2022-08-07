import React, { Dispatch } from 'react'
import { boxStyles, BoxCustomStyleObj } from './boxStyles'

export type BoxProps = {
    children: React.ReactNode,
    customStyleObj?: BoxCustomStyleObj,
}

export const Box: React.FC<BoxProps> = (props: BoxProps) => {
    const { children, customStyleObj } = props
    return (
        <div style={boxStyles(customStyleObj)}>
            { children }
        </div>
    )
}


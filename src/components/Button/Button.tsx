import React, { Dispatch } from 'react'
import { FlexBox } from '../FlexBox'
import { buttonStyles, ButtonCustomStyleObj } from './buttonStyles'
 
export type ButtonProps = {
    children: React.ReactNode,
    customStyleObj?: ButtonCustomStyleObj,
    onClick: Function | Dispatch<any> | any
}

export const Button: React.FC<ButtonProps> = (props) => {    
    const { children, customStyleObj, onClick} = props

    return (
        <div onClick={() => onClick()} style={buttonStyles(customStyleObj)}>
            <FlexBox>
                {children}
            </FlexBox>
        </div>
    )
}

import React from "react";
import { Box } from "../components";

export default {
     title: 'Box',
     component: Box,
     displayName: 'Box Component'
}

const Template = (args) => (
    <Box {...args}>
        <div>
            Box Content
        </div>
    </Box>
)

const customArgs = {
    customStyleObj: {
        backgroundColor: 'aqua',
        width: '10em',
        height: '10em',
        additionalStyles: { 
            borderRadius: '.25em', 
            border: '1px solid black'
        }
    }
}

const baseArgs = undefined

export const Default = Template.bind({})
Default.args = baseArgs

export const Custom = Template.bind({})
Custom.args = customArgs
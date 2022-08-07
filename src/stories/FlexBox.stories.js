import React from "react";
import { Box, FlexBox } from "../components";

export default {
     title: 'FlexBox',
     component: FlexBox,
}

const Template = (args) => (
    <FlexBox {...args}>
        <Box customStyleObj={{
            backgroundColor: 'white',
            additionalStyles: {
                borderRadius: '.5em'
            }
        }}>
            Box Content
        </Box>
        <Box customStyleObj={{
            backgroundColor: 'white',
            additionalStyles: {
                borderRadius: '.5em'
            }
        }}>
            Box Content
        </Box>
    </FlexBox>
)

const baseArgs = {
    customStyleObj: {
        backgroundColor: 'rebeccaPurple',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 'fit-content',
        width: '20em',
        flexDirection: 'row',
        padding: '2.5%',
    } 
}

export const Default = Template.bind({})
Default.args = baseArgs
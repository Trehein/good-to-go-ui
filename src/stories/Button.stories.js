import React from "react";
import { Button } from "../components";

export default {
     title: 'Button',
     component: Button,
}

const Template = (args) => (
     <Button {...args}>
          <div>Click Me</div>
     </Button>
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
         cursor: 'pointer',
     },
     onClick: () => console.log('Button Clicked!'), 
 }

export const Default = Template.bind({})
Default.args = baseArgs
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '../components'

const stories = storiesOf('Button Component Test', module)

stories.add('Button Component', () => {
    const [isTrue, setIsTrue] = useState(false)
    return (<Button />)
})
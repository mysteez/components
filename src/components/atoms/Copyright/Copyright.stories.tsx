// eslint-disable-next-line no-unused-vars
import { Copyright, IProps } from './Copyright'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Atoms/Copyright',
  component: Copyright
} as Meta

const Template: Story<IProps> = (args) => <Copyright {...args} />

export const Default = Template.bind({})

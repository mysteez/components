// eslint-disable-next-line no-unused-vars
import { IconButton, IProps } from './IconButton'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Atoms/IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta

const Template: Story<IProps> = (args) => <IconButton {...args} />

export const Hamburger = Template.bind({})
Hamburger.args = {
  name: 'hamburger'
}

export const X = Template.bind({})
X.args = {
  name: 'x'
}

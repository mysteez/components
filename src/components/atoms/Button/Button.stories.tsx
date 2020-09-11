// eslint-disable-next-line no-unused-vars
import { Button, IProps } from './Button'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Example/Button',
  component: Button
} as Meta

const Template: Story<IProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Button',
  size: 'md'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Button'
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
  label: 'Button'
}

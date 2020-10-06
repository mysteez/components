// eslint-disable-next-line no-unused-vars
import { Button, IProps } from './Button'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Atoms/Button',
  component: Button
} as Meta

const Template: Story<IProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Large'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  label: 'Medium'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Small'
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
  label: 'Button'
}

export const NoPeriod = Template.bind({})
NoPeriod.args = {
  period: false,
  label: 'Button'
}

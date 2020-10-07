// eslint-disable-next-line no-unused-vars
import { Icon, IProps } from './Icon'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon
} as Meta

const Template: Story<IProps> = (args) => <Icon {...args} />

export const Hamburger = Template.bind({})
Hamburger.args = {
  name: 'hamburger'
}

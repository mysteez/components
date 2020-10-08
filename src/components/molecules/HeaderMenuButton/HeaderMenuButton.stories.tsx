// eslint-disable-next-line no-unused-vars
import { HeaderMenuButton } from './HeaderMenuButton'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Molecules/HeaderMenuButton',
  component: HeaderMenuButton
} as Meta

const Template: Story = (args) => <HeaderMenuButton {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'en_hk'
}

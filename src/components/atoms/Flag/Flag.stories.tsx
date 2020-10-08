// eslint-disable-next-line no-unused-vars
import { Flag, IProps } from './Flag'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Atoms/Flag',
  component: Flag
} as Meta

const Template: Story<IProps> = (args) => <Flag {...args} />

export const HK = Template.bind({})
HK.args = {
  name: 'en_hk'
}

export const CA = Template.bind({})
CA.args = {
  name: 'en_ca'
}

export const US = Template.bind({})
US.args = {
  name: 'en_us'
}

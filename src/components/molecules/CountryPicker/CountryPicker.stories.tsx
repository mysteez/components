// eslint-disable-next-line no-unused-vars
import { CountryPicker, IProps } from './CountryPicker'
// eslint-disable-next-line no-unused-vars
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Design System/Molecules/CountryPicker',
  component: CountryPicker
} as Meta

const Template: Story<IProps> = (args) => <CountryPicker {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'en_hk'
}

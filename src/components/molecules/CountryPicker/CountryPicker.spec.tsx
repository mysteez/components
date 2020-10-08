import 'jest-styled-components'
import React from 'react'

import { CountryPicker } from './CountryPicker'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<CountryPicker />', () => {
  it('renders a country picker', () => {
    const wrapper = shallow(<CountryPicker name='en_hk' />)

    expect(wrapper.first().exists()).toEqual(true)
  })
})

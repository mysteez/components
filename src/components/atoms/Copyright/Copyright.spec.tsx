import 'jest-styled-components'
import React from 'react'

import { Copyright } from './Copyright'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<Copyright />', () => {
  it('renders a copyright', () => {
    const wrapper = shallow(<Copyright company='Test Inc.' />)

    expect(wrapper.first().exists()).toEqual(true)
  })
})

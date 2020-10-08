import 'jest-styled-components'
import React from 'react'

import { Icon } from './Icon'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<Icon />', () => {
  it('renders an icon', () => {
    const wrapper = shallow(<Icon name='hamburger' />)

    expect(wrapper.find('path').exists()).toEqual(true)
  })
})

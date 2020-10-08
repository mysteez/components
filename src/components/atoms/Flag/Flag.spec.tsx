import 'jest-styled-components'
import React from 'react'

import { Flag } from './Flag'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<Flag />', () => {
  it('renders an flag', () => {
    const wrapper = shallow(<Flag name='en_hk' />)

    expect(wrapper.first().exists()).toEqual(true)
  })
})

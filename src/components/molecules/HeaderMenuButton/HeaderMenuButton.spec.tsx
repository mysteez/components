import 'jest-styled-components'
import React from 'react'

import { HeaderMenuButton } from './HeaderMenuButton'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<HeaderMenuButton />', () => {
  it('renders a country picker', () => {
    const wrapper = shallow(<HeaderMenuButton />)

    expect(wrapper.first().exists()).toEqual(true)
  })
})

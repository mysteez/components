import 'jest-styled-components'
import React from 'react'

import { IconButton } from './IconButton'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<IconButton />', () => {
  it('renders an icon button', () => {
    const wrapper = mount(<IconButton name='hamburger' />)
    expect(wrapper.find('svg').exists()).toEqual(true)
  })

  it('simulates click events', () => {
    const onIconButtonClick = jest.fn()
    const wrapper = shallow(
      <IconButton onClick={onIconButtonClick} name='hamburger' />
    )

    wrapper.simulate('click')
    expect(onIconButtonClick).toHaveBeenCalledTimes(1)
  })
})

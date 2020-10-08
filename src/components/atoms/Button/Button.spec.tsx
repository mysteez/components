import 'jest-styled-components'
import React from 'react'

import { Button } from './Button'
import * as S from './styles'
import { theme } from '../../../globalStyles/constants'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<Button />', () => {
  it('renders children', () => {
    const text = 'test'
    const wrapper = shallow(<Button label={text} />)
    expect(wrapper.text()).toEqual(`${text}.`)
  })

  it('simulates click events', () => {
    const onButtonClick = jest.fn()
    const text = 'test'
    const wrapper = shallow(<Button onClick={onButtonClick} label={text} />)

    wrapper.simulate('click')
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })

  it('uses correct theme based on color prop', () => {
    const text = 'test'
    const PrimaryButton = mount(<Button label={text} />)
    const SecondaryButton = mount(<Button label={text} color='secondary' />)

    expect(PrimaryButton).toHaveStyleRule(
      'background-color',
      theme.button.colors.primary.background
    )

    expect(SecondaryButton).toHaveStyleRule(
      'background-color',
      theme.button.colors.secondary.background
    )
  })

  it('uses correct theme based on size prop', () => {
    const text = 'test'
    const NormalButtonText = mount(<Button label={text} size='md' />).find(
      S.Text
    )

    expect(NormalButtonText).toHaveStyleRule(
      'font-size',
      theme.button.typography.fontSize
    )
  })
})

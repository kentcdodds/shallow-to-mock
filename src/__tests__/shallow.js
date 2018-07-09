import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {HiddenMessage} from '../hidden-message'

Enzyme.configure({adapter: new Adapter()})

test('shallow', () => {
  const wrapper = shallow(<HiddenMessage initialShow={true} />)
  const children = expect.any(Object)
  const defaultProps = {children}
  expect(wrapper.find('Fade').props()).toEqual({
    in: true,
    children: expect.any(Object)
  })
  wrapper.find('button').simulate('click')
  expect(wrapper.find('Fade').props()).toEqual({
    in: false,
    children: expect.any(Object)
  })
})

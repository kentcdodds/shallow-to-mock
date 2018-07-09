import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {HiddenMessage} from '../hidden-message'

Enzyme.configure({adapter: new Adapter()})

test('shallow', () => {
  const wrapper = shallow(<HiddenMessage initialShow={true} />)
  expect(wrapper.find('Fade').props()).toEqual({
    in: true,
    children: <div>Hello world</div>
  })
  wrapper.find('button').simulate('click')
  expect(wrapper.find('Fade').props()).toEqual({
    in: false,
    children: <div>Hello world</div>
  })
})

import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {render, fireEvent, cleanup} from 'react-testing-library'
import {HiddenMessage} from '../hidden-message'

afterEach(cleanup)

jest.mock('react-transition-group', () => {
  return {CSSTransition: jest.fn(({children}) => children)}
})

test('you can mock things with jest.mock', () => {
  const {getByText} = render(<HiddenMessage initialShow={true} />)
  const context = expect.any(Object)
  const children = expect.any(Object)
  const defaultProps = {children, timeout: 1000, className: 'fade'}
  expect(CSSTransition).toHaveBeenCalledWith(
    {in: true, ...defaultProps},
    context
  )
  CSSTransition.mockClear()
  fireEvent.click(getByText(/toggle/i))
  expect(CSSTransition).toHaveBeenCalledWith(
    {in: false, ...defaultProps},
    context
  )
})

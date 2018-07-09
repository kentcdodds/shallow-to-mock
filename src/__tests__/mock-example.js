import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {render, fireEvent} from 'react-testing-library'
import {HiddenMessage} from '../hidden-message'

test('you can mock things with jest.mock', () => {
  const {getByText, queryByText, debug} = render(
    <HiddenMessage initialShow={true} />
  )
  const toggleButton = getByText('Toggle')

  const context = expect.any(Object)
  const children = expect.any(Object)
  const defaultProps = {children, timeout: 1000, className: 'fade'}

  expect(CSSTransition).toHaveBeenCalledWith(
    {in: true, ...defaultProps},
    context
  )
  expect(getByText('Hello world')).not.toBeNull()

  CSSTransition.mockClear()

  fireEvent.click(toggleButton)

  expect(queryByText('Hello world')).toBeNull()
  expect(CSSTransition).toHaveBeenCalledWith(
    {in: false, ...defaultProps},
    context
  )
})

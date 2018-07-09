module.exports = {
  CSSTransition: jest.fn(({children, in: show}) => (show ? children : null))
}

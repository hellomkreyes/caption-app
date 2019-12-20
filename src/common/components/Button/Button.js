import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ children, ...rest }) => {
  return (
    <button {...rest}>{ children }</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}

import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps}>{ children }</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}

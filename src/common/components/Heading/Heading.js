import React from 'react'
import PropTypes from 'prop-types'

export const Heading = props => {
  const HeadingTag = `h${props.level}`
  const id = props.id
  let className = props.appearance ? `t${props.appearance}` : ''

  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <HeadingTag className={className} id={id}>
      { props.children }
    </HeadingTag>
  )
}

Heading.propTypes = {
  children: PropTypes.string.isRequired
}

Heading.defaultProps = {
  level: 2
}

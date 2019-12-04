import React from 'react'

export const Heading = (props) => {
  const level = props.level || 2
  const HeadingTag = `h${level}`
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

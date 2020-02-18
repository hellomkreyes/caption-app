import React from 'react'
import PropTypes from 'prop-types'

import { Heading, CaptionField } from '../../components'

export const CaptionBlock = ({ title, caption, score }) => {
  return (
    <div>
      { title && <Heading level={2}>{ title }</Heading> }
      <p>Confidence: { score }</p>
      <CaptionField caption={caption} />
    </div>
  )
}

CaptionBlock.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string.isRequired
}

CaptionBlock.defaultProps = {
  caption: ''
}

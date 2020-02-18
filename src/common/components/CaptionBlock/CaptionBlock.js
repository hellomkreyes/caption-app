import React from 'react'
import PropTypes from 'prop-types'

import { Heading, CaptionField, ConfidenceRater } from '../../components'

export const CaptionBlock = ({ title, caption, score }) => {
  return (
    <div>
      { title && <Heading level={2}>{ title }</Heading> }
      <ConfidenceRater score={score} />
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

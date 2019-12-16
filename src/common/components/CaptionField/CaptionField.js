import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { Button, Tooltip } from '../../components'

export const CaptionField = ({ id, caption }) => {
  const [copySuccess, setCopySuccess] = useState('')
  const textAreaRef = useRef(null)

  const hasCaption = (caption) => {
    return caption.length !== undefined && caption.length > 0 ? true : false
  }

  const copyToClipboard = e => {
    textAreaRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    setCopySuccess('Copied!')
  }

  return (
    <>
      <label htmlFor={id}>
        <span className="visually-hidden">Generated caption: {caption}</span>
        <textarea name=""
          id={id}
          cols="30"
          rows="1"
          ref={textAreaRef}
          defaultValue={caption}
        />
      </label>

      { document.queryCommandSupported('copy') && <div>
        <Button onClick={copyToClipboard} disabled={!hasCaption(caption)}>Copy to clipboard</Button>
        { copySuccess && <Tooltip>{copySuccess}</Tooltip> }
      </div> }
    </>
  )
}

CaptionField.propTypes = {
  caption: PropTypes.string.isRequired
}

CaptionField.defaultProps = {
  caption: ''
}

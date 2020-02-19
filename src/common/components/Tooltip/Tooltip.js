import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Tooltip.module.scss'

export const Tooltip = ({ children, ...rest }) => {
  const tooltipClassName = classNames(styles.tooltip, rest.className)

  return (
    <div className={tooltipClassName}>
      <span role={'alert'}
        className={styles['tooltip-text']}
        aria-live={'assertive'}
        aria-label={'The generated caption has been copied to your clipboard.'}
      >{children}</span>
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.string.isRequired
}

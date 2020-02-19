import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Tooltip.module.scss'

export const Tooltip = ({ children, ...rest }) => {
  const tooltipClassName = classNames(styles.tooltip, rest.className)

  return (
    <div className={tooltipClassName}>
      <span className={styles['tooltip-text']}>{children}</span>
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.string.isRequired
}

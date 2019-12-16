import React from 'react'
import PropTypes from 'prop-types'

import styles from './Tooltip.module.scss'

export const Tooltip = ({ children }) => (
  <div className={styles.tooltip}>
    <span className={styles['tooltip-text']}>{children}</span>
  </div>
)

Tooltip.propTypes = {
  children: PropTypes.string.isRequired
}

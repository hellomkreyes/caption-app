import React from 'react'
import PropTypes from 'prop-types'

import styles from './ConfidenceRater.module.scss'

export const ConfidenceRater = ({ score }) => {
  return (
    <>
      <div>
        <p>{score && 'Confidence Score: '}
          {score <= 0.25 && <span>
            <span className={styles.confidenceRater__emojis}
              role='img' 
              aria-label='Less than 25% confidence for caption accuracy. Represented by a sad face emoji and thumbsdown emoji.'>😣👎 </span> 
            Less than 25%</span> }
          {score > 0.25 && score <= 0.5 && <span>
            <span className={styles.confidenceRater__emojis}
              role='img' 
              aria-label='Shrug emoji. About 50% confidence for caption accuracy.'>🤷‍♀️ </span>
            feeling 50/50.</span> }
          {score > 0.5 && score <= 0.75 && <span>
            <span className={styles.confidenceRater__emojis}
              role='img' 
              aria-label='Thumbs up. About 75% confidence for caption accuracy.'>👍 </span>
            pretty confident about this.</span> }
          {score > 0.75 && <span>
            <span className={styles.confidenceRater__emojis}
              role='img' 
              aria-label='Awesomeee. High confidence for caption accuracy.'>🤩💯 </span>
            definitely use this caption!</span>}
        </p>
      </div>
    </>
  )
}


ConfidenceRater.propTypes = {
  score: PropTypes.number
}

import React, { Component } from 'react'

import styles from './App.module.scss'

// Custom Components
import {
  Heading,
  CaptionBlock
} from '../common/components'

import ImageUploader from '../common/components/ImageUploader/ImageUploader'

// ConfidenceRater (from the API - confidence % of AI & the caption it generated)
// ResetButton (reset uploaded file and generated captions)
// ProgressBar (when caption is being generated)

class App extends Component {
  state = {
    title: 'Generate',
    subtitle: 'Alt Text!',
    firstCaption: {},
    secondCaption: {}
  }

  getResponse = (obj) => {
    this.setState({
      firstCaption: obj.BestOutcome,
      secondCaption: obj.RunnerUpOutcome
    })
  }

  render() {
    const {
      firstCaption,
      secondCaption,
      title,
      subtitle
    } = this.state

    return (
      <main className={styles.App}>
        <header>
          <Heading level={1}>{title} <span>{subtitle}</span></Heading>
        </header>

        <div className={styles['App-grid']}>
          <div className={styles['App-column']}>
            <CaptionBlock title={'First Caption'}
              caption={firstCaption.Description}
              score={firstCaption.ConfidenceScore}
            />
            <CaptionBlock title={'Second Caption'}
              caption={secondCaption.Description}
              score={secondCaption.ConfidenceScore}
            />
          </div>

          <div className={styles['App-column']}>
            <ImageUploader getResponse={this.getResponse} />
          </div>
        </div>

        <footer>
          <span>&copy; { new Date().getFullYear() } <a href="//hellomkreyes.com" target="_blank" rel="noopener noreferrer">M.K. Reyes</a></span>
        </footer>
      </main>
    )
  }
}

export default App

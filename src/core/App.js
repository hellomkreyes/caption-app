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
    hasImage: false,
    firstCaption: {},
    secondCaption: {}
  }

  getResponse = (obj) => {
    this.setState({
      firstCaption: obj.BestOutcome,
      secondCaption: obj.RunnerUpOutcome
    })
  }

  resetState = () => {
    this.setState({
      firstCaption: {},
      secondCaption: {}
    })
  }

  hasImage = (bool) => {
    this.setState({ hasImage: bool })
  }

  render() {
    const {
      firstCaption,
      secondCaption,
      title,
      subtitle,
      hasImage
    } = this.state

    return (
      <main className={styles.App}>
        <header>
          <Heading level={1} className={styles.App__title}>{title} <span className={styles.App__subtitle}>{subtitle}</span></Heading>
          {!hasImage && <p className={styles.App__description}>Having writers block? Can't seem to come up with alt text for your image? Let 'Generate Alt Text!' do the work for you! This generator uses Cloudmersive's Image Descriptions and Captioning API, to generate a one sentence caption for any uploaded image.</p>}
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
            <ImageUploader hasImage={this.hasImage}
              getResponse={this.getResponse} 
              reset={this.resetState} />
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

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
        <header className={styles.App__header}>
          <Heading level={1} className={styles.App__title}>{title} <span className={styles.App__subtitle}>{subtitle}</span></Heading>
          {!hasImage && <p className={styles.App__description}>Having writers block? Can't seem to come up with alt text for your image? Let 'Generate Alt Text!' do the work for you! This generator uses Cloudmersive's Image Descriptions and Captioning API, to generate a one sentence caption for any uploaded image.</p>}
          <span className={styles.App__fineprint}>Powered by <a href="//api.cloudmersive.com/docs/image.asp" target="_blank" rel="noopener noreferrer">Cloudmersive's Image Processing API</a></span>
        </header>

        <div className={styles['App-grid']}>
          <div className={styles['App-column']}>
            <ImageUploader hasImage={this.hasImage}
              getResponse={this.getResponse} 
              reset={this.resetState} />
          </div>

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
        </div>

        <footer className={styles.App__footer}>
          <span>&copy; { new Date().getFullYear() } <a href="http://hellomkreyes.com/" target="_blank" rel="noopener noreferrer">M.K. Reyes</a></span>
          <ul className={styles.App__socialList}>
            <li>
              <a href="//github.com/hellomkreyes" target="_blank" rel="noopener noreferrer" aria-label="Visit my Github profile.">
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
            <li>
              <a href="//www.linkedin.com/in/mkreyes/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile.">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="//codepen.io/hellomkreyes" target="_blank" rel="noopener noreferrer" aria-label="Visit my codepen!">
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>
        </footer>
      </main>
    )
  }
}

export default App

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
    title: 'Image Caption App',
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
      secondCaption
    } = this.state

    return (
      <main className={styles.App}>
        <header>
          <Heading level={1}>{this.state.title}</Heading>
        </header>

        <div className={styles['App-grid']}>
          <div className={styles['App-column']}>
            <CaptionBlock title={'First Caption'} caption={firstCaption.Description} />
            <CaptionBlock title={'Second Caption'} caption={secondCaption.Description}/>
          </div>

          <div className={styles['App-column']}>
            <ImageUploader getResponse={this.getResponse} />
          </div>
        </div>

        <footer>
          <span>Created by M.K. Reyes | &copy; 2019</span>
        </footer>
      </main>
    )
  }
}

export default App

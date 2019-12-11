import React, { Component } from 'react'

import styles from './App.module.scss'

// Custom Components
import { Heading } from '../common/components'
import ImageUploader from '../common/components/ImageUploader/ImageUploader'
// ConfidenceRater (from the API - confidence % of AI & the caption it generated)
// CaptionBox (caption input text field)
// ResetButton (reset uploaded file and generated captions)
// CopyButton (to copy caption to clipboard)
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
    return (
      <main className={styles.App}>
        <header>
          <Heading level={1}>{this.state.title}</Heading>
        </header>

        <div className='grid'>
          <div className='column'>
            <ImageUploader getResponse={this.getResponse} />
          </div>
          <div className='column'>
            
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

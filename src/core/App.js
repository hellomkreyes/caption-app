import React, { Component } from 'react'

import styles from './App.module.scss'

// Custom Components
import { Heading } from '../common/components/Heading/Heading'
import ImageUploader from '../common/components/ImageUploader/ImageUploader'
// ConfidenceRater (from the API - confidence % of AI & the caption it generated)
// CaptionBox (caption input text field)
// ResetButton (reset uploaded file and generated captions)
// CopyButton (to copy caption to clipboard)
// ProgressBar (when caption is being generated)

class App extends Component {
  constructor () {
    super()
    this.state = {
      firstCaption: {},
      secondCaption: {}
    }

    this.getResponse = this.getResponse.bind(this)
  }
  getResponse (obj) {
    this.setState({ firstCaption: obj.BestOutcome })
    this.setState({ secondCaption: obj.RunnerUpOutcome })
  }
  componentDidMount () {
  }
  render () {
    return (
      <main className={styles.App}>
        <header>
          <Heading level={1}>Image Caption App</Heading>
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

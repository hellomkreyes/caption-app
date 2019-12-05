import React, { Component } from 'react'
// import { fetchCaptionEndpoint } from '../common/api/apiRequest.js'

import styles from './App.module.scss'

// Custom Components
// Heading
import ImageUploader from '../common/components/ImageUploader/ImageUploader'
// ConfidenceRater
// CaptionBox
// ResetButton
// CopyButton
// ProgressBar

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
          <h1>Image Caption App</h1>
        </header>

        <ImageUploader getResponse={this.getResponse} />

        <footer>
          <span>Created by M.K. Reyes | &copy; 2019</span>
        </footer>
      </main>
    )
  }
}

export default App

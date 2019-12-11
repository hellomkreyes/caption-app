import React, { Component } from 'react'

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
          <h1>{this.state.title}</h1>
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

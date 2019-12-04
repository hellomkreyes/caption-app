import React, { Component } from 'react'
import { fetchCaptionEndpoint } from '../api/cloudmersive.js'
// import './App.css'
import styles from './App.module.scss'

// Custom Components
// Heading
// AppHeader
// TextWindow
import ImageUploader from '../common/components/ImageUploader/ImageUploader'
// ConfidenceRater
// CaptionBox
// ResetButton
// CopyButton
// ProgressBar

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }
  fetchData (query, random) {
  }
  setQuery () {

  }
  componentDidMount () {

  }
  render () {
    return (
      <main className={styles.App}>
        <header>
          <h1>Image Caption App</h1>
        </header>

        <ImageUploader />

        <footer>
          <span>Created by M.K. Reyes | &copy; 2019</span>
        </footer>
      </main>
    )
  }
}

export default App

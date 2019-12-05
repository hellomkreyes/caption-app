import React, { Component } from 'react'
// import { fetchCaptionEndpoint } from '../common/api/apiRequest.js'

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
  fetchData (imageFile) {
    // fetchCaptionEndpoint(this.state.endpoint, {
    //   imageFile: imageFile,
    //   method: 'POST',
    //   mode: 'no-cors'
    // }).then(data => {
    //   console.log(data)
    // })
  }
  setQuery () {
    console.log('compile api query')
    console.log(this.state.file)
    // this.fetchData(this.state.file)
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

import React, { Component } from 'react'
import { fetchCaptionEndpoint } from './api/cloudmersive.js'
import logo from './logo.svg'
import './App.css'

// Custom Components
// Heading
// AppHeader
// TextWindow
import ImageUploader from './components/ImageUploader/ImageUploader'
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
      <div className='App'>
        <header>
          <h1>Image Caption App</h1>
        </header>
        <ImageUploader />
      </div>
    )
  }
}

export default App

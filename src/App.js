import React, { Component } from 'react'
import { fetchCaptionEndpoint } from './api/cloudmersive.js'
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
    this.state = {
      file: '',
      formResponse: '',
      endpoint: 'image/recognize/describe'
    }

    this.getImageFile = this.getImageFile.bind(this)
    this.getFormData = this.getFormData.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.setQuery = this.setQuery.bind(this)
  }
  getImageFile (file) {
    this.setState({ file })
  }
  getFormData (formResponse) {
    this.setState({ formResponse })
  }
  fetchData (imageFile) {
    fetchCaptionEndpoint(this.state.endpoint, {
      imageFile: imageFile,
      method: 'POST',
      mode: 'no-cors'
    }).then(data => {
      console.log(data)
    })
  }
  setQuery () {
    console.log('compile api query')
    // this.fetchData(this.state.file)
  }
  componentDidMount () {
    console.log('mounted')
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('updated')
    if (prevState.file !== this.state.file) this.setQuery()
    if (prevState.formResponse !== this.state.formResponse) this.setQuery()
  }
  render () {
    return (
      <div className='App'>
        <header>
          <h1>Image Caption App</h1>
        </header>
        <ImageUploader
          getImageFile={this.getImageFile}
          getFormData={this.getFormData}
        />
      </div>
    )
  }
}

export default App

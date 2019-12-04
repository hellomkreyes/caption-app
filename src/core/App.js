import React, { Component } from 'react'
import { fetchCaptionEndpoint } from '../common/api/cloudmersive.js'

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
      <main className={styles.App}>
        <header>
          <Heading level={1}>Image Caption App</Heading>
        </header>

        <div className='grid'>
          <div className='column'>
            <ImageUploader
              getImageFile={this.getImageFile}
              getFormData={this.getFormData}
            />
          </div>
          <div className='column'></div>
        </div>

        <footer>
          <span>Created by M.K. Reyes | &copy; 2019</span>
        </footer>
      </main>
    )
  }
}

export default App

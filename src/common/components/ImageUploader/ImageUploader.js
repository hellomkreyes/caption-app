/* globals cloudmersiveImageApiClient */

import React, { Component } from 'react'

import styles from './ImageUploader.module.scss'

const { REACT_APP_API_KEY } = process.env
// const API_BASE_URL = 'https://api.cloudmersive.com/'
const apiClient = cloudmersiveImageApiClient.ApiClient.instance
const Apikey = apiClient.authentications['Apikey']

class ImageUploader extends Component {
  constructor (props) {
    super()
    this.state = {
      imagePreviewURL: '',
      formData: '',
      rawFile: ''
    }
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getCaptions = this.getCaptions.bind(this)
  }
  getCaptions () {
    Apikey.apiKey = REACT_APP_API_KEY
    const api = new cloudmersiveImageApiClient.RecognizeApi()
    console.log(api)

    // const imageBytes = formData

    const callback = function (error, data, res) {
      if (error) {
          console.error(error)
          console.error(res)
      } else {
          console.log('API called successfully.')
          console.log(res)
      }
    }

    api.recognizeDescribe(this.state.rawFile, callback)

  }
  handleSubmit (e) {
    e.preventDefault()
    const data = new FormData(e.target)
    this.setState({ formData: data })
    this.getCaptions()
  }
  handleImageChange (e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    this.setState({ rawFile: file })

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewURL: reader.result
      })
    }

    reader.readAsDataURL(file)
  }
  render () {
    let { imagePreviewURL } = this.state
    let $imagePreview

    if (imagePreviewURL) {
      $imagePreview = (<div className={styles.imageContainer}>
        <img src={imagePreviewURL} alt='' />
      </div>)
    }

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.handleImageChange} />
          <button type='submit' onClick={this.handleSubmit}>Generate Caption!</button>
        </form>
        { $imagePreview }
      </>
    )
  }
}

export default ImageUploader

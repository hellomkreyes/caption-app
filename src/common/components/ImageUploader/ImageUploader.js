/* globals cloudmersiveImageApiClient */

import React, { Component } from 'react'

import styles from './ImageUploader.module.scss'

const { REACT_APP_API_KEY } = process.env
const apiClient = cloudmersiveImageApiClient.ApiClient.instance
const Apikey = apiClient.authentications['Apikey']

class ImageUploader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imagePreviewURL: '',
      rawFile: ''
    }

    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.postImageToApi = this.postImageToApi.bind(this)
  }
  postImageToApi () {
    let currentComponent = this;
    Apikey.apiKey = REACT_APP_API_KEY
    const api = new cloudmersiveImageApiClient.RecognizeApi()
    const { rawFile } = currentComponent.state
    const { getResponse } = currentComponent.props

    const callback = function (error, data, res) {
      if (error) {
        console.error(error, res)
      } else {
        console.log('API called successfully.')
        getResponse(res.body)
      }
    }

    api.recognizeDescribe(rawFile, callback)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.postImageToApi()
  }
  handleImageChange (e) {
    e.preventDefault()
    let reader = new FileReader()
    let rawFile = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        rawFile,
        imagePreviewURL: reader.result
      })
    }

    reader.readAsDataURL(rawFile)
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
          <label htmlFor='imageFile'>File Upload</label>
          <input type='file'
            id='imageFile'
            name='imageFile'
            onChange={this.handleImageChange}
          />
          <button type='submit'>Generate Caption!</button>
        </form>

        { $imagePreview }
      </>
    )
  }
}

export default ImageUploader

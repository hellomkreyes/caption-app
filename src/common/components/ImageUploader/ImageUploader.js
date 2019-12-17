/* globals cloudmersiveImageApiClient */

import React, { Component } from 'react'

import { Button } from '../../components'

import styles from './ImageUploader.module.scss'

const { REACT_APP_API_KEY } = process.env
const apiClient = cloudmersiveImageApiClient.ApiClient.instance
const Apikey = apiClient.authentications['Apikey']

class ImageUploader extends Component {
  state = {
    imagePreviewURL: '',
    rawFile: ''
  }

  postImageToApi = () => {
    Apikey.apiKey = REACT_APP_API_KEY
    const api = new cloudmersiveImageApiClient.RecognizeApi()
    const { rawFile } = this.state
    const { getResponse } = this.props

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

  handleSubmit = e => {
    e.preventDefault()
    this.postImageToApi()
  }

  handleImageChange = e => {
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

  render() {
    let { imagePreviewURL } = this.state
    let $imagePreview

    if (imagePreviewURL) {
      $imagePreview = (<div className={styles.imageContainer}>
        <img src={imagePreviewURL} 
          alt='Preview of uploaded file' 
          title='Preview of uploaded file'
        />
      </div>)
    }

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='imageFile'>File Upload</label>
          <input type='file'
            id='imageFile'
            name='imageFile'
            accept='image/png, image/jpeg'
            onChange={this.handleImageChange}
          />
          <Button type={'submit'}>Generate Caption!</Button>
        </form>

        { $imagePreview }
      </>
    )
  }
}

export default ImageUploader

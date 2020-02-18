/* globals cloudmersiveImageApiClient */

import React, { Component } from 'react'

import { Button } from '../../components'

import styles from './ImageUploader.module.scss'

const { REACT_APP_API_KEY } = process.env
const apiClient = cloudmersiveImageApiClient.ApiClient.instance
const Apikey = apiClient.authentications['Apikey']

class ImageUploader extends Component {
  state = {
    uploadLabel: 'Upload an image!',
    imagePreviewURL: '',
    rawFile: '',
    hasImage: false,
    fileSize: '',
    rawFileSize: 0,
    sizeLimit: 4000000,
    errorMsg: 'Exceeds file size. Choose a smaller image 🙏~'
  }

  postImageToApi = () => {
    Apikey.apiKey = REACT_APP_API_KEY
    const api = new cloudmersiveImageApiClient.RecognizeApi()
    const { rawFile } = this.state
    const {
      getResponse
    } = this.props

    const callback = function (error, data, res) {
      if (error) {
        console.error(error, res.text)
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
    const {
      hasImage
    } = this.props
    let reader = new FileReader()
    let rawFile = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        rawFile,
        imagePreviewURL: reader.result,
        hasImage: true,
        fileSize: `${this.convertBytes(rawFile.size)}`,
        rawFileSize: rawFile.size
      })

      hasImage(true)
    }

    reader.readAsDataURL(rawFile)
  }

  handleReset = () => {
    const {
      reset,
      hasImage
    } = this.props
    const form = document.getElementById('imageForm')
    form.reset()

    this.setState({
      imagePreviewURL: '',
      rawFile: '',
      hasImage: false,
      fileSize: '',
      rawFileSize: 0,
    })

    // this needs to trigger a callback that clears state in the App
    reset()
    hasImage(false)
  }

  convertBytes = (bytes) => {
    // taken from https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript

    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
  }

  render() {
    let {
      imagePreviewURL,
      uploadLabel,
      hasImage,
      fileSize,
      rawFileSize,
      sizeLimit,
      errorMsg
    } = this.state
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
        <div className={styles.imageUploader__container}>
          <form id='imageForm' onSubmit={this.handleSubmit}>
            {!hasImage && <label htmlFor='imageFile' className={'button'}>{uploadLabel}</label>}
            <input type='file'
              id='imageFile'
              name='imageFile'
              accept='image/png, image/jpeg'
              onChange={this.handleImageChange}
              className={'visually-hidden'}
            />

            {hasImage && rawFileSize <= sizeLimit && <Button type={'submit'}>Generate Caption!</Button>}

            {rawFileSize > sizeLimit && <span className={styles.imageUploader__fileSize}>{fileSize}</span>}
          </form>

          {hasImage && <Button className={styles.imageUploader__reset} onClick={this.handleReset}>Reset!</Button>}
        </div>

        {rawFileSize > sizeLimit && <span className={styles.imageUploader__errorMsg}>{errorMsg}</span>}

        { $imagePreview }
      </>
    )
  }
}

export default ImageUploader

import React, { Component } from 'react'
import './ImageUploader.css'

class ImageUploader extends Component {
  constructor (props) {
    super()
    this.state = {
      file: '',
      imagePreviewURL: ''
    }

    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    // grab this.state.file
    // submit to Cloudmersive API
  }
  handleImageChange (e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

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
      $imagePreview = (<div className='imageContainer'>
        <img src={imagePreviewURL} alt='' />
      </div>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='file' onChange={this.handleImageChange} />
          <button type='submit' onClick={this.handleSubmit}>Generate Caption!</button>
        </form>
        { $imagePreview }
      </div>
    )
  }
}

export default ImageUploader

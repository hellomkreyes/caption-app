import React, { Component } from 'react'
import './ImageUploader.css'

class ImageUploader extends Component {
  constructor (props) {
    super()
    this.state = {
      imagePreviewURL: ''
    }

    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()

    // pass image file into parent
    // parent will do all logic for API call
    const data = new FormData(e.target)
    // for (let [key, value] of data.entries()) {
    //   if (key === 'imageFile') this.props.getImageFile(value)
    // }

    this.props.getFormData(data)
  }
  handleImageChange (e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({ imagePreviewURL: reader.result })
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
          <label htmlFor='imageFile'>File Upload</label>
          <input type='file'
            id='imageFile'
            name='imageFile'
            onChange={this.handleImageChange}
          />
          <button type='submit'>Generate Caption!</button>
        </form>
        { $imagePreview }
      </div>
    )
  }
}

export default ImageUploader

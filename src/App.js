import React, { Component } from 'react'
import { fetchCaptionEndpoint } from './api/cloudmersive.js'
import logo from './logo.svg'
import './App.css'

// Custom Components
// Heading
// AppHeader
// TextWindow
// FormContainer
// ImageUploader
// ConfidenceRater
// CaptionBox
// ResetButton
// CopyButton
// ProgressBar

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Image Caption App</h1>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

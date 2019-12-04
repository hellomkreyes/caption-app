const { REACT_APP_API_KEY } = process.env

const API_BASE_URL = ' https://api.cloudmersive.com/'

const objectToQueryParams = params =>
  Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    })
    .join('&')

export const fetchCaptionEndpoint = (endpoint, params, options = {}) =>
  fetch(`${API_BASE_URL}${endpoint}${objectToQueryParams(params)}`, {
    ...options,
    headers: {
      Authorization: `Token ${REACT_APP_API_KEY}`
    }
  }).then(res => res.json())

// const CloudmersiveImageApiClient = require('cloudmersive-image-api-client')
// const defaultClient = CloudmersiveImageApiClient.ApiClient.instance

// // Configure API key authorization: Apikey
// const Apikey = defaultClient.authentications['Apikey']
// Apikey.apiKey = REACT_APP_API_KEY

// const apiInstance = new CloudmersiveImageApiClient.RecognizeApi()

// // var imageFile = Buffer.from(fs.readFileSync("C:\\temp\\inputfile").buffer) // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.

// const imageFile = ''

// const callback = (error, data, response) => {
//   if (error) {
//     console.error(error)
//   } else {
//     console.log('API called successfully. Returned data: ' + data)
//   }
// }

// apiInstance.recognizeDescribe(imageFile, callback)

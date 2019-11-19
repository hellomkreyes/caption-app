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

const { CLOUDMERSIVE_API_KEY } = process.env

const API_BASE_URL = ' https://api.cloudmersive.com/'

const objectToQueryParams = params =>
  Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    })
    .join('&')

export const fetchCaptionEndpoint = (endpoint, params, options = {}) =>
  fetch(``, {
    ...options,
    headers: {
      Authorization: ``
    }
  }).then(res => res.json())

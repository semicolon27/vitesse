import axios from 'redaxios'

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const http = axios.create({
  baseURL: 'https://example.com/api',
  headers: { 'Content-Type': 'application/json' },
})

// Step-2: Create request, response & error handlers
const requestHandler = (request: any) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  request.headers.helo = 'helo'

  return request
}

const responseHandler = (response: any) => {
  if (response.data.rc === 401)
    window.location.href = '/login'

  return response
}

const errorHandler = (error: any) => {
  return Promise.reject(error)
}

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
http.interceptors.request.use(
  (request: any) => requestHandler(request),
  (error: any) => errorHandler(error),
)

http.interceptors.response.use(
  (response: any) => responseHandler(response),
  (error: any) => errorHandler(error),
)

// Step-4: Export the newly created Axios instance to be used in different locations.
export default http

function sendRequest(method, url, body = null, headers) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    return response.JSON()
  })
}

export default sendRequest
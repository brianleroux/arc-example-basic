exports.handler = async function http (req) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: `hello <strong>world</strong>`
  }
}

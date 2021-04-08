let arc = require('@architect/functions')
let fun = req => ({ html: `hello <strong>world</strong><pre>${JSON.stringify(req, null, 2)}</pre>`})
exports.handler = arc.http.async(fun)

let sandbox = require('@architect/sandbox')
let test = require('tape')
let tiny = require('tiny-json-http')

test('ok', async t=> {
  await sandbox.start()
  t.ok(await tiny.get({ url: 'http://localhost:3333' }), 'request ok')
  await sandbox.end()
})

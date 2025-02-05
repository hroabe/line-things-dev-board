/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'


// [START gae_node_request_example]
const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.use('/', express.static('linethings-dev-js-control'))

app.get('/hello', (req, res) => {
  console.log(req.body)

  res
    .status(200)
    .send('Hello, World!')
    .end()
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/service-menu/dist/index.html')
})

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on http://0.0.0.0:${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
// [END gae_node_request_example]

module.exports = app
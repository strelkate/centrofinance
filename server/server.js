const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const AUTHORIZATION = 'Bearer 12345'

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/personal-data', (req, res) => {
  if (!isAuthorized(req)) {
    return res.status(200).json({
      success: false,
      error: 'Unauthorized'
    })
  }

  const {
    lastName,
    firstName,
    middleName,
    dateBirth,
    country,
    email // not required
  } = req.body

  if (!firstName || !lastName || !middleName || !dateBirth || !country) {
    return res.json({
      success: false,
      error: 'Invalid params'
    })
  }

  res.json({
    success: true,
    data: {}
  })
})

app.post('/code', (req, res) => {
  if (!isAuthorized(req)) {
    return res.status(200).json({
      success: false,
      error: 'Unauthorized'
    })
  }

  const { code } = req.body

  if (!code || code === '9999') {
    return res.status(200).json({
      success: false,
      error: 'Wrong code'
    })
  }

  res.json({
    success: true,
    data: {}
  })
})

app.post('/approve', (req, res) => {
  if (!isAuthorized(req)) {
    return res.status(200).json({
      success: false,
      error: 'Unauthorized'
    })
  }

  res.json({
    success: true,
    data: {}
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Starting on ${PORT}`)
})

function isAuthorized(req) {
  const auth = req.headers.authorization
  return !!auth && auth === AUTHORIZATION
}

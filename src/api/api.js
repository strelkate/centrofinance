const BASE_URL = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : ''
const BEARER_TOKEN = '12345'

export async function postPersonalData (data) {
  try {
    const response = await fetch(BASE_URL + '/personal-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + BEARER_TOKEN
      },
      body: JSON.stringify(data)
    })
    return await isSuccess(response)
  } catch (error) {
    console.error('Fetch postPersonalData error:', error)
  }
  return false
}

export async function postCode (code) {
  try {
    const response = await fetch(BASE_URL + '/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + BEARER_TOKEN
      },
      body: JSON.stringify({ code: code })
    })
    return isSuccess(response)
  } catch (error) {
    console.error('Fetch postCode error:', error)
  }
  return false
}

export async function postApprove () {
  try {
    const response = await fetch(BASE_URL + '/approve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + BEARER_TOKEN
      }
    })
    return isSuccess(response)
  } catch (error) {
    console.error('Fetch postCode error:', error)
  }
  return false
}

async function isSuccess (response) {
  if (response.status === 200) {
    const responseBody = await response.json()
    if (responseBody.success === true) {
      return true
    }
    console.error('Response body error:', responseBody.error)
    return false
  }
  console.error('Response status code:', response.status)
  return false
}

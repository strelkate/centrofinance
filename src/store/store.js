export function savePersonalData (data) {
  const s = JSON.stringify(data)
  localStorage.setItem('personal_data', s)
}

export function getPersonalData () {
  const s = localStorage.getItem('personal_data') ?? '{}'
  return JSON.parse(s)
}

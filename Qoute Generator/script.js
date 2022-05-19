const qouteContainer = document.getElementById('qoute-container')

let apiQoutes = []

// Show New Qoute
function newQoute() {
  // Pick a random qoute
  const qoute = apiQoutes[Math.floor(Math.random() * apiQoutes.length)]
  console.log(qoute)
}

// Get qoutes from API
async function getQoutes() {
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQoutes = await response.json()
    newQoute()
  } catch (error) {
    // Catch Error Here
  }
}

const button = document.getElementById('new-qoute')

const getNewQoute = () => {
  button.addEventListener('click', getQoutes())
}

getNewQoute()

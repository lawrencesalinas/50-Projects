const qouteContainer = document.getElementById('qoute-container')
const qouteText = document.getElementById('qoute')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQouteBtn = document.getElementById('new-qoute')
const loader = document.getElementById('loader')

let apiQoutes = []

// Show loading
function loading() {
  loader.hidden = false
  qouteContainer.hidden = true
}

// Hide Loading
function complete() {
  qouteContainer.hidden = false
  loader.hidden = true
}
// Show New Qoute
function newQoute() {
  loading()
  // Pick a random qoute
  const qoute = apiQoutes[Math.floor(Math.random() * apiQoutes.length)]
  // Check if Author filed is blank replace it with 'Unknown'
  if (!qoute.author) {
    authorText.innerText = 'Unknowm'
  } else {
    authorText.innerText = qoute.author
  }

  // Check Qoute length to determine the styling
  if (qoute.text.length > 120) {
    qouteText.classList.add('long-qoute')
  } else {
    qouteText.classList.remove('long-qoute')
  }
  // Set Qoute, Hide Loader
  qouteText.textContent = qoute.text
  complete()
}

// Get qoutes from API
async function getQoutes() {
  loading()
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQoutes = await response.json()
    newQoute()
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Qoute
function tweetQoute() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${qouteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}

// Event Listeners
newQouteBtn.addEventListener('click', newQoute)
twitterBtn.addEventListener('click', tweetQoute)

// On Laod
getQoutes()

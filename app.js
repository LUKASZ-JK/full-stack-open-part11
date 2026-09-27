const express = require('express')
const axios = require('axios')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

app.get('/version', (_req, res) => {
  res.send('11.12.2') // change this string to ensure a new version deployed
})

app.get('/health', async (_req, res) => {
  try {
    //check if external API is reachable
    await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
    res.status(200).send('ok')
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(503).send('external API error')
  }
})

start()

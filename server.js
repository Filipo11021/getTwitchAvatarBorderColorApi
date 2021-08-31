import express from 'express'
import getColor from './getColor.js'
import getStreamer from './getStreamer.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()


const PORT = process.env.PORT || 4900

app.use(express.json())

app.post('/color', async (req, res) => {
  const checkCode = req.body.code === process.env.CODE
  const streamer = req.body.streamer.toLowerCase()

  if (checkCode && validateInput(streamer)) {
     const { user } = await getStreamer(streamer)
     
     if (!user) {
        res.status(404).json({ error: `${streamer} not exist` })
        return
    }
    const color = await getColor(streamer)
    res.json({ color, streamer: user.login })
  } else {
     res.status(401).json({ error: 'incorrect code' })
     return
  }
})

function validateInput(input) {
  return /^[a-zA-Z0-9_]*$/i.test(input)
}

app.listen(PORT, () => console.log(`port: ${PORT}`))

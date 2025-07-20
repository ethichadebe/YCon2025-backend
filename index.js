const express = require('express')
const cors = require('cors')
require('dotenv').config()
const registerRoutes = require('./routes/registerRoutes')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', registerRoutes)

// Server Start
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`))

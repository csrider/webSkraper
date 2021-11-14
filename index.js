const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const PORT = 8000

// Get the package
const app = express()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
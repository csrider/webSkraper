const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const PORT = 8000
const url = 'https://www.theguardian.com/uk'

// Get the package
const app = express()

axios(url)
    .then((result) => {
        const html = result.data
        console.log(html)
    }).catch((err) => {
        console.log(err)
    });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
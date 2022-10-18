const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Write in the URL : ./hello/your_name')
})

//Personal page for Tibo
router.get('/hello/Tibo', (req, res) => {
  const name = req.params.name
    res.send(`Personnalized Message for Tibo`)
})

//Basic page for everyone
router.get('/hello/:name', (req, res) => {
    const name = req.params.name
      res.send(`Hello ${name}`)    
})


router.get('/products', (req, res) => {
const db = {
  articles: [
    {
      id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      title: 'My article',
      content: 'Content of the article.',
      date: '04/10/2022',
      author: 'Liz Gringer'
    }
  ],
  comments: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: 1664835049,
      content: 'Content of the comment.',
      articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      author: 'Bob McLaren'
    }
  ]
})


module.exports = router
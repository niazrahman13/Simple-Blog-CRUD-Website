const express = require('express')
const { createBlog, readBlog, readBlogId, blogUpdate, blogDelete } = require('../controller/BlogController')
const router = express.Router()

// API Routing End Point

router.post('/CreateBlog',createBlog)

router.get('/ReadBlog',readBlog)

router.get('/ReadBlogId/:id',readBlogId)

router.post('/BlogUpdate/:id',blogUpdate)

router.post('/DeleteBlog/:id',blogDelete)

module.exports = router
const express = require('express');
const router = express.Router();

// === CONTROLLERS IMPORTS === //
mainController = require('./controllers/main.controllers');


module.exports = router;


router.get('/', mainController.home);
router.get('/posts', mainController.showPosts)
router.get('/posts/:post', mainController.showSinglePost)
router.get('*', mainController.notFound)
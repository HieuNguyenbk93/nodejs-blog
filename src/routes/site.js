const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/course/:slug', siteController.course);
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
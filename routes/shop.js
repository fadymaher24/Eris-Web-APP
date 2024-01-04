const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getHome);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/games', shopController.getGames);

router.get('/contact', shopController.getContact);
router.post("/send_email", shopController.postSendEmail);

router.get('/shop', shopController.getIndex);

module.exports = router;


const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const userController = require('../controllers/users_controller');


router.get('/',homeController.home);
router.get('/sleep',homeController.sleep);
router.use('/users' , require('./users'));

router.use('/testing',require('./testing'))


module.exports = router;
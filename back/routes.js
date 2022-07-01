const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('./controllers/registerController');
const {login} = require('./controllers/loginController');
const {getUser} = require('./controllers/getUserController');
const {getUsers} = require('./controllers/getUsersController');
var indexRouter = require('./routes/index');

router.get('/', indexRouter)

router.get('/users', getUsers)

router.post('/users/register', [
    body('name',"The name must be at least 3 characters long.")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('email',"Invalid email address.")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The password must at least 8 characters long.").notEmpty().trim().isLength({ min: 8 }),
], register);


router.post('/users/login',[
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The password must at least 8 characters long.").notEmpty().trim().isLength({ min: 8 }),
],login);

router.get('/users/profile',getUser);

module.exports = router;

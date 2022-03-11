import Router from 'express';
import usersController from '../controllers/usersController.js';
import userHandler from '../middleware/userHandler.js';
import setTimeStamp from '../middleware/addTimeStamp.js';
import authHandler from '../middleware/authHandler.js';


const router = Router();
console.log('......usersRouter......');

router.use(userHandler.validateUserEmail);

router.route('/register')//crear usuario
    .post(setTimeStamp.addTimeStamp)
    .post(usersController.checkUser)
    .post(authHandler.encryptPassword)
    .post(usersController.register);

router.route('/login')
    .post(usersController.isDefined)
    .post(usersController.login);

export default router;











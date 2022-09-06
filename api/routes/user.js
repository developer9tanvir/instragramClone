import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister, getLoggedInUser, verifyUserAccount, recoverPassword, ResetPassword } from '../controllers/userControllers.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';





// init Route
const Router = express.Router();

// USER auth route
Router.post('/login', userLogin);
Router.post('/register', userRegister);
Router.get('/me', getLoggedInUser);
Router.post('/verify', verifyUserAccount);
Router.post('/recover-password', recoverPassword);
Router.post('/reset-password', ResetPassword);


// Route REST API
Router.route('/').get(authMiddleware, getAllUser).post(authMiddleware, createUser);
Router.route('/:id').get(authMiddleware, getSingleUser).delete(authMiddleware, deleteUser).put(authMiddleware, updateUser).patch(authMiddleware, updateUser);





// export Default Router
export default Router;
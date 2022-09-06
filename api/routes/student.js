import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent  } from '../controllers/studentController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';





// init Route
const Router = express.Router();


// Route
Router.route('/').get(authMiddleware, getAllStudents).post(authMiddleware, createStudent);
Router.route('/:id').get(authMiddleware, getSingleStudent).delete(authMiddleware, deleteStudent).put(authMiddleware, updateStudent).patch(authMiddleware, updateStudent);


// export Default Router
export default Router;




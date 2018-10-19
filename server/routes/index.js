import { UserClass, CoursesClass } from '../controllers';
import SessionControl from '../middleware/SessionControl';
import express from 'express';

const router = express.Router();

router.post('/user/signup', UserClass.signup);
router.post('/user/signin', UserClass.signin);
router.post('/course/add', SessionControl.hasToken, SessionControl.isUser, CoursesClass.createCourse)

export default router;

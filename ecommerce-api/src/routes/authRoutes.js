import expressn from 'express';
import { register, login } from 'authController.js';
import validate from '../middlewares/validation.js';

const router = expressn.Router();
router.post('/register',
    [
    body('displayName')
    .notEmpty().withMessage('displayName is required')
    .isLength({min:2.max:50}).withMessage('displayName must be between 2 and 50 characters')
    .matches(/^)
)
import express from 'express'
import { register,logout,Login,getProfile,UpdateUser } from '../controller/UserController.js'
import { protect } from '../middleware/authMiddleware.js';
const router=express.Router();

router.post('/',register)
router.post('/auth',Login)
router.post('/logout',logout)
router.route('/profile').get(protect,getProfile).put(protect,UpdateUser)

export default router;
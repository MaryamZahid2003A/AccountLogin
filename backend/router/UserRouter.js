import express from 'express'
import { register,logout,Login,getProfile,UpdateUser } from '../controller/UserController.js'

const router=express.Router();

router.post('/',register)
router.post('/auth',Login)
router.post('/logout',logout)
router.route('/profile').get(getProfile).put(UpdateUser)

export default router;
const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  getUserById,
  updateUserById,
  deleteUserById,
  updateUserPasswordById,
  getAll,
  updateAvatar
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/api/user/register', registerUser)
router.post('/api/user/login', loginUser)
router.put('/api/userAvatar/:id', updateAvatar)
router.get('/api/user/me', protect, getMe)
router.get('/api/user/all', getAll)
router.get('/api/user/:id', getUserById )
router.put('/api/user/:id', updateUserById )
router.put('/api/user/password/:id', updateUserPasswordById )
router.delete('/api/user/:id', deleteUserById )

module.exports = router
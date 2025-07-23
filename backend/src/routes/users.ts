import { Router } from 'express';

const router = Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get user profile endpoint',
  });
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Update user profile endpoint',
  });
});

export default router;

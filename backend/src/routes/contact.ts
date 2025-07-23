import { Router } from 'express';

const router = Router();

// @route   POST /api/contact
// @desc    Send contact message
// @access  Public
router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Contact message endpoint',
  });
});

export default router;

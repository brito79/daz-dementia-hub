import { Router } from 'express';

const router = Router();

// @route   GET /api/content/articles
// @desc    Get all articles
// @access  Public
router.get('/articles', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get articles endpoint',
  });
});

// @route   POST /api/content/articles
// @desc    Create new article
// @access  Private
router.post('/articles', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Create article endpoint',
  });
});

export default router;

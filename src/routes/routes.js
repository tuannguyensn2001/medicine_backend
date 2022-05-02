import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('false');
});

export default router;

import express from 'express';
import Plans from '../controllers/plans';

const router = express.Router();

router.get('/', Plans.findAll);
router.get('/:id', Plans.findById);

export default router;

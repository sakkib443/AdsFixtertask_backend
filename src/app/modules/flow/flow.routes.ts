import express from 'express';
import auth from '../../middlewares/auth';
import { FlowControllers } from './flow.controller';

const router = express.Router();

router.post('/', auth(), FlowControllers.createFlow);
router.get('/', auth(), FlowControllers.getAllFlows);
router.get('/:id', auth(), FlowControllers.getSingleFlow);
router.patch('/:id', auth(), FlowControllers.updateFlow);
router.delete('/:id', auth(), FlowControllers.deleteFlow);

export const FlowRoutes = router;

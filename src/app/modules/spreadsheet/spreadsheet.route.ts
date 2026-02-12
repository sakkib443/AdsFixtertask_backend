import express from 'express';
import auth from '../../middlewares/auth';
import { SpreadsheetControllers } from './spreadsheet.controller';

const router = express.Router();

router.post(
    '/create',
    auth('admin', 'superadmin', 'buyer'),
    SpreadsheetControllers.createSpreadsheet,
);

router.get(
    '/',
    auth('admin', 'superadmin', 'buyer'),
    SpreadsheetControllers.getAllSpreadsheets,
);

router.get(
    '/:id',
    auth('admin', 'superadmin', 'buyer'),
    SpreadsheetControllers.getSingleSpreadsheet,
);

router.patch(
    '/:id',
    auth('admin', 'superadmin', 'buyer'),
    SpreadsheetControllers.updateSpreadsheet,
);

router.delete(
    '/:id',
    auth('admin', 'superadmin', 'buyer'),
    SpreadsheetControllers.deleteSpreadsheet,
);

export const SpreadsheetRoutes = router;

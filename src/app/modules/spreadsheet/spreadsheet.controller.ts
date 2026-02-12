import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SpreadsheetServices } from './spreadsheet.service';

const createSpreadsheet = catchAsync(async (req: Request, res: Response) => {
    const user = (req as any).user;
    const result = await SpreadsheetServices.createSpreadsheetIntoDB({
        ...req.body,
        user: user._id,
    });

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Spreadsheet created successfully',
        data: result,
    });
});

const getAllSpreadsheets = catchAsync(async (req: Request, res: Response) => {
    const user = (req as any).user;
    const result = await SpreadsheetServices.getAllSpreadsheetsFromDB(user._id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Spreadsheets retrieved successfully',
        data: result,
    });
});

const getSingleSpreadsheet = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = (req as any).user;
    const result = await SpreadsheetServices.getSingleSpreadsheetFromDB(id, user._id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Spreadsheet retrieved successfully',
        data: result,
    });
});

const updateSpreadsheet = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = (req as any).user;
    const result = await SpreadsheetServices.updateSpreadsheetInDB(id, user._id, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Spreadsheet updated successfully',
        data: result,
    });
});

const deleteSpreadsheet = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = (req as any).user;
    const result = await SpreadsheetServices.deleteSpreadsheetFromDB(id, user._id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Spreadsheet deleted successfully',
        data: result,
    });
});

export const SpreadsheetControllers = {
    createSpreadsheet,
    getAllSpreadsheets,
    getSingleSpreadsheet,
    updateSpreadsheet,
    deleteSpreadsheet,
};

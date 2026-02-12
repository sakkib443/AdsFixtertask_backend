import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FlowServices } from './flow.service';

const createFlow = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user._id;
    const result = await FlowServices.createFlowIntoDB({ ...req.body, user: userId });

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Flow created successfully',
        data: result,
    });
});

const getAllFlows = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user._id;
    const result = await FlowServices.getAllFlowsFromDB(userId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Flows fetched successfully',
        data: result,
    });
});

const getSingleFlow = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FlowServices.getSingleFlowFromDB(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Flow fetched successfully',
        data: result,
    });
});

const updateFlow = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FlowServices.updateFlowInDB(id, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Flow updated successfully',
        data: result,
    });
});

const deleteFlow = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FlowServices.deleteFlowFromDB(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Flow deleted successfully',
        data: result,
    });
});

const duplicateFlow = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.user._id;
    const result = await FlowServices.duplicateFlowInDB(id, userId);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Flow duplicated successfully',
        data: result,
    });
});

const toggleActive = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await FlowServices.toggleActiveInDB(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Flow status toggled successfully',
        data: result,
    });
});

export const FlowControllers = {
    createFlow,
    getAllFlows,
    getSingleFlow,
    updateFlow,
    deleteFlow,
    duplicateFlow,
    toggleActive,
};

import { TFlow } from './flow.interface';
import { Flow } from './flow.model';

const createFlowIntoDB = async (payload: TFlow) => {
    const result = await Flow.create(payload);
    return result;
};

const getAllFlowsFromDB = async (userId: string) => {
    const result = await Flow.find({ user: userId, isDeleted: false });
    return result;
};

const getSingleFlowFromDB = async (id: string) => {
    const result = await Flow.findById(id);
    return result;
};

const updateFlowInDB = async (id: string, payload: Partial<TFlow>) => {
    const result = await Flow.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteFlowFromDB = async (id: string) => {
    const result = await Flow.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
};

export const FlowServices = {
    createFlowIntoDB,
    getAllFlowsFromDB,
    getSingleFlowFromDB,
    updateFlowInDB,
    deleteFlowFromDB,
};

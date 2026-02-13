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
    const current = await Flow.findById(id);
    if (!current) return null;

    if (payload.nodes || payload.edges) {
        // Save current as a version snapshot before updating
        const newVersion = (current.version || 1) + 1;
        await Flow.findByIdAndUpdate(id, {
            $push: {
                versions: {
                    version: current.version,
                    nodes: current.nodes,
                    edges: current.edges,
                    createdAt: new Date()
                }
            },
            $set: { ...payload, version: newVersion }
        });
        return Flow.findById(id);
    }

    const result = await Flow.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteFlowFromDB = async (id: string) => {
    const result = await Flow.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
};

const duplicateFlowInDB = async (id: string, userId: string) => {
    const original = await Flow.findById(id);
    if (!original) return null;
    const duplicate = await Flow.create({
        name: `${original.name} (Copy)`,
        user: userId,
        nodes: original.nodes,
        edges: original.edges,
        isActive: false,
        version: 1,
        isDeleted: false,
    });
    return duplicate;
};

const toggleActiveInDB = async (id: string) => {
    const flow = await Flow.findById(id);
    if (!flow) return null;
    flow.isActive = !flow.isActive;
    await flow.save();
    return flow;
};

export const FlowServices = {
    createFlowIntoDB,
    getAllFlowsFromDB,
    getSingleFlowFromDB,
    updateFlowInDB,
    deleteFlowFromDB,
    duplicateFlowInDB,
    toggleActiveInDB,
};

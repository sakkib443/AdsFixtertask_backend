import { Schema, model } from 'mongoose';
import { TFlow } from './flow.interface';

const FlowSchema = new Schema<TFlow>(
    {
        name: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        nodes: { type: [Schema.Types.Mixed], default: [] },
        edges: { type: [Schema.Types.Mixed], default: [] },
        isActive: { type: Boolean, default: true },
        version: { type: Number, default: 1 },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

export const Flow = model<TFlow>('Flow', FlowSchema);

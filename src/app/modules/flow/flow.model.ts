import { Schema, model } from 'mongoose';
import { TFlow } from './flow.interface';

const FlowSchema = new Schema<TFlow>(
    {
        name: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        nodes: { type: [], default: [] },
        edges: { type: [], default: [] },
        isActive: { type: Boolean, default: true },
        version: { type: Number, default: 1 },
        versions: { type: [], default: [] },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

export const Flow = model<TFlow>('Flow', FlowSchema);

import { Types } from 'mongoose';

export type TFlowNode = {
    id: string;
    type: string;
    position: { x: number; y: number };
    data: Record<string, any>;
};

export type TFlowEdge = {
    id: string;
    source: string;
    target: string;
    sourceHandle?: string | null;
    targetHandle?: string | null;
};

export type TFlow = {
    name: string;
    user: Types.ObjectId;
    nodes: TFlowNode[];
    edges: TFlowEdge[];
    isActive: boolean;
    version: number;
    isDeleted: boolean;
};

import { Types } from 'mongoose';

export interface TCellStyle {
    bold?: boolean;
    italic?: boolean;
    fontSize?: number;
    color?: string;
    backgroundColor?: string;
    textAlign?: 'left' | 'center' | 'right';
}

export interface TCell {
    row: number;
    col: string; // 'A', 'B', etc.
    value: string;
    formula?: string;
    style?: TCellStyle;
}

export interface TSpreadsheet {
    name: string;
    user: Types.ObjectId;
    data: TCell[];
    isDeleted: boolean;
}

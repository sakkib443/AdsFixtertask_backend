import { Schema, model } from 'mongoose';
import { TSpreadsheet, TCell, TCellStyle } from './spreadsheet.interface';

const CellStyleSchema = new Schema<TCellStyle>({
    bold: { type: Boolean, default: false },
    italic: { type: Boolean, default: false },
    fontSize: { type: Number, default: 14 },
    color: { type: String },
    backgroundColor: { type: String },
    textAlign: { type: String, enum: ['left', 'center', 'right'], default: 'left' }
}, { _id: false });

const CellSchema = new Schema<TCell>({
    row: { type: Number, required: true },
    col: { type: String, required: true },
    value: { type: String, default: '' },
    formula: { type: String },
    style: { type: CellStyleSchema }
}, { _id: false });

const SpreadsheetSchema = new Schema<TSpreadsheet>({
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    data: [CellSchema],
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

export const Spreadsheet = model<TSpreadsheet>('Spreadsheet', SpreadsheetSchema);

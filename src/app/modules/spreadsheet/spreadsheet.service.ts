import { TSpreadsheet } from './spreadsheet.interface';
import { Spreadsheet } from './spreadsheet.model';

const createSpreadsheetIntoDB = async (payload: TSpreadsheet) => {
    const result = await Spreadsheet.create(payload);
    return result;
};

const getAllSpreadsheetsFromDB = async (userId: string) => {
    const result = await Spreadsheet.find({ user: userId, isDeleted: false }).select('name createdAt updatedAt');
    return result;
};

const getSingleSpreadsheetFromDB = async (id: string, userId: string) => {
    const result = await Spreadsheet.findOne({ _id: id, user: userId, isDeleted: false });
    return result;
};

const updateSpreadsheetInDB = async (id: string, userId: string, payload: Partial<TSpreadsheet>) => {
    const result = await Spreadsheet.findOneAndUpdate(
        { _id: id, user: userId },
        payload,
        { new: true }
    );
    return result;
};

const deleteSpreadsheetFromDB = async (id: string, userId: string) => {
    const result = await Spreadsheet.findOneAndUpdate(
        { _id: id, user: userId },
        { isDeleted: true },
        { new: true }
    );
    return result;
};

export const SpreadsheetServices = {
    createSpreadsheetIntoDB,
    getAllSpreadsheetsFromDB,
    getSingleSpreadsheetFromDB,
    updateSpreadsheetInDB,
    deleteSpreadsheetFromDB,
};

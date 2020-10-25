//import mongoose from 'mongoose';
import { mongoose } from '../core/db';

export const isValidObjectId = mongoose.Types.ObjectId.isValid;

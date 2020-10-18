import { model, Schema, Document } from 'mongoose';
import { UserModelDocumentInterface } from './UserModel';

export interface TweetModelInterface {
  _id?: string;
  text: string;
  user: string;
}

export type TweetModelDocumentInterface = TweetModelInterface & Document;

const TweetSchema = new Schema<TweetModelInterface>({
  text: {
    required: true,
    type: String,
  },
  user: {
    required: true,
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
});

export const TweetModel = model<TweetModelDocumentInterface>('User', TweetSchema);

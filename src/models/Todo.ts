import { model, Schema } from "mongoose";

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export const TodoModel = model('Todo', TodoSchema);
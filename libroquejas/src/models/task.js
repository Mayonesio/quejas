import { Schema, model, models } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    unique: true,
    trim: true,
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a short description'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide the content of the complaint'],
    trim: true,
  },
  autor: {
    type: String,
    required: [true, 'Please provide an author'],
    trim: true,
  }
}, {
  timestamps: true,
});

export default models.Task || model('Task', taskSchema);
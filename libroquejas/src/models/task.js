import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
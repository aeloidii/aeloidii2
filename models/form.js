import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!']
  },
  message: {
    type: String,
    required: [true, 'message is required!']
  }
});

const Form = models.Form || model("Form", MessageSchema);

export default Form;
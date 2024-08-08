import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    name: {
      type: String,
      required: [true, 'Username is required'],
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = models?.User || model('User', UserSchema);

export default User;

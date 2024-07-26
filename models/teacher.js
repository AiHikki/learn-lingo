import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema({
  reviewer_name: { type: String, required: true },
  reviewer_rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const teacherSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    languages: { type: [String], required: true },
    levels: { type: [String], required: true },
    rating: { type: Number, required: true },
    reviews: { type: [reviewSchema] },
    price_per_hour: { type: Number, required: true },
    lessons_done: { type: Number },
    avatar_url: { type: String, required: true },
    lesson_info: { type: String, required: true },
    conditions: { type: [String], required: true },
    experience: { type: String, required: true },
    liked: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Teacher = models.Teacher || model('Teacher', teacherSchema);

export default Teacher;

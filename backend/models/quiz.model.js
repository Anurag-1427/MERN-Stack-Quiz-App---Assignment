import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ text: String, isCorrect: Boolean }],
  topic: { type: String, required: true },
  difficulty: { type: Number, required: true },
  weight: { type: Number, required: true, default: 1 },
});

export const Quiz = mongoose.model("Quiz", questionSchema);

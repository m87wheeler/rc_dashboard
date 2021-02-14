const mongoose = require("mongoose");
const { Schema } = mongoose;

const EntrySchema = new Schema({
  year: { type: Number, required: true },
  month: { type: String, required: true },
  total_from_start: { type: Number, required: true },
  brought_forward: { type: Number, required: true },
  new_claims: { type: Number, required: true },
  previous_backlog: { type: Number, required: true },
  reopened_in_month: { type: Number, required: true },
  closed: { type: Number, required: true },
  carried_forward: { type: Number, required: true },
  settled_at_nil: { type: Number, required: true },
  settled_claims: { type: Number, required: true },
});

module.exports = mongoose.model("data", EntrySchema);

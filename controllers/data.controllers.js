const Entry = require("../models/Entry");

// method   GET
// route    /api/data
// desc     get all data entries
const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    if (!entries.length)
      return res
        .status(400)
        .json({ success: false, message: "No entries found" });
    res.status(200).json({ success: true, data: entries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// method   GET
// route    /api/data/:id
// desc     get single data entry
const getEntry = async (req, res) => {
  try {
    const entry = await Entry.find({ _id: req.params.id });
    if (!entry)
      return res
        .status(400)
        .json({ success: false, message: "No entry found" });
    res.status(200).json({ success: true, data: entry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// method   POST
// route    /api/data
// desc     create new data entry
const newEntry = async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    const savedEntry = await newEntry.save();
    return res.status(201).json({ success: true, data: savedEntry._doc });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getEntries, getEntry, newEntry };

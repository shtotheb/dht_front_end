var mongoose = require('mongoose');

var RecordSchema = mongoose.Schema({
  _id: { type: String, index: true },
  name: { type: String, index: true },
  search: { type: String, index: true },
  magnet: { type: String },
  categories: { type: String, default: "Unknown", index: true },
  size: { type: Number, default: 0 },
  swarm: {
    seeders: { type: Number, default: 0, index: true },
    leechers: { type: Number, default: 0, index: true }
  },
  files: {
    path: { type: [String], default: [], index: true },
    length: { type: [Number], default: 0 }
  },
  imported: {type: Date, default: Date.now, index: true},
  updated: {type: Date, default: Date.now, index: true}
});

var Records = mongoose.model('Records',RecordSchema);

module.exports = Records;

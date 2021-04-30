const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.EKI_ANTRIAN = require("./antrian.model")(mongoose);
db.EKI_PASIEN = require("./pasien.model")(mongoose);

module.exports = db;

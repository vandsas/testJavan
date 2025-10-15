const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "Nama user harus diisi"],
    },
    nophone: {
      type: String,
      required: [true, "Nomor telepon harus diisi"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const User = mongoose.model("User", userSchema);

module.exports = User;

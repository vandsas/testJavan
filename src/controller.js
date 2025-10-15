const User = require("./userModels");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      message: "Berhasil mendapatkan semua data user",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: `User dengan ID ${req.params.id} tidak ditemukan` });
    }
    res.json({
      message: `Berhasil mendapatkan data user dengan ID ${req.params.id}`,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const user = new User({
    user: req.body.user,
    nophone: req.body.nophone,
  });

  try {
    const newUser = await user.save();
    res.status(201).json({
      message: "User baru berhasil dibuat",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: `User dengan ID ${req.params.id} tidak ditemukan` });
    }
    res.json({
      message: `User dengan ID ${req.params.id} berhasil diperbarui`,
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: `User dengan ID ${req.params.id} tidak ditemukan` });
    }
    res.json({
      message: `User dengan nama '${deletedUser.user}' berhasil dihapus`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};

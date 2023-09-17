import Usermodel from "../models/Usermodel.js";

export const updateuser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateduser = await Usermodel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: updateduser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "updating failed" });
    console.log(error);
  }
};
export const deleteuser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteduser = await Usermodel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "deleted successfully",
      data: deleteduser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "deleting failed" });
    console.log(error);
  }
};
export const getsingleuser = async (req, res) => {
  const id = req.params.id;
  try {
    const singleuser = await Usermodel.findById(id);
    res.status(200).json({
      success: true,
      message: "getting singleuser successfully",
      data: singleuser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "NO user found" });
    console.log(error);
  }
};
export const getallusers = async (req, res) => {
  try {
    const users = await Usermodel.find({});
    res.status(200).json({
      success: true,
      message: "users found",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "NO users found" });
    console.log(error);
  }
};

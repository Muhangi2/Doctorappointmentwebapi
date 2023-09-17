import Doctormodel from "../models/Doctormodel.js";

export const updatedoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateddoctor = await Doctormodel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: updateddoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "updating failed" });
    console.log(error);
  }
};
export const deletedoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteddoctor = await Doctormodel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "deleted successfully",
      data: deleteddoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "deleting failed" });
    console.log(error);
  }
};
export const getsingledoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const singledoctor = await Doctormodel.findById(id);
    res.status(200).json({
      success: true,
      message: "getting singledoctor successfully",
      data: singledoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "NO doctor found" });
    console.log(error);
  }
};
export const getalldoctors = async (req, res) => {
  try {
    const doctors = await Doctormodel.find({});
    res.status(200).json({
      success: true,
      message: "doctors found",
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "NO doctors found" });
    console.log(error);
  }
};

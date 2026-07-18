import Doctor from "../models/Doctor.js";

// Get all doctors
export const getDoctors = (req, res) => {
  Doctor.find()
    .then((doctors) => {
      res.status(200).json(doctors);
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
};

// Get one doctor
export const getDoctorById = (req, res) => {
  Doctor.findById(req.params.id)
    .then((doctor) => {
      if (!doctor) {
        return res.status(404).json({
          message: "Doctor not found",
        });
      }

      res.status(200).json(doctor);
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
};

// Add doctor
export const createDoctor = (req, res) => {
  Doctor.create(req.body)
    .then((doctor) => {
      res.status(201).json({
        message: "Doctor Added Successfully",
        doctor,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
};
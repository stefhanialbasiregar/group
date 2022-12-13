const { Router } = require("express");
const { requireDoctorAuth } = require("../middlewares/doctorAuthMiddleware");
const {
  doctor_login,
  doctor_register,
} = require("../controllers/doctorAuthControllers");

const router = Router();

router.post("/register/doctor", requireAdminAuth, doctor_register);
router.post("/login/doctor", doctor_login);


module.exports = router;

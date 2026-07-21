import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PatientLogin from "./pages/patient/PatientLogin";
import PatientSignup from "./pages/patient/PatientSignup";
import DoctorLogin from "./pages/doctor/DoctorLogin";
import DoctorSignup from "./pages/doctor/DoctorSignup";
// import ChooseRole from "./components/ChooseRole";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/patient/signup" element={<PatientSignup />} />
      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/doctor/signup" element={<DoctorSignup />} />
      {/* <Route path="/choose-role" element={<ChooseRole />} /> */}
    </Routes>
  );
}

export default App;
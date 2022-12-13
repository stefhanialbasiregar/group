import "./App.css";
import Contact from "./components/landingPage/Contact";
import RegisterPatient from "./components/landingPage/RegisterPatient";
import About from "./components/landingPage/About";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [healthID, setHealthID] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const [toastCondition, settoastCondition] = useState({
    status: "",
    message: "",
  });

  if (toastShow) {
    if (toastCondition.status === "success") {
      toast.success(toastCondition.message);
    } else if (toastCondition.status === "error") {
      toast.error(toastCondition.message);
    } else if (toastCondition.status === "warning") {
      toast.warn(toastCondition.message);
    } else if (toastCondition.status == "info") {
      toast.info(toastCondition.message);
    }
    settoastCondition({
      status: "",
      message: "",
    });
    setToastShow(false);
  }

  return (
    <div className="bg-bgprimary flex">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              settoastCondition={settoastCondition}
              setToastShow={setToastShow}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="contact"
          element={
            <Contact
              settoastCondition={settoastCondition}
              setToastShow={setToastShow}
            />
          }
        />
        <Route
          path="Register"
          element={
            <RegisterPatient
              setToastShow={setToastShow}
              settoastCondition={settoastCondition}
            />
          }
        />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

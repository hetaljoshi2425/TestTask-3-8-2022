import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllDataContainer from "./Container/AllDataContainer";
import FormContainer from "./Container/formContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormContainer />} />
        <Route path="/view" element={<AllDataContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

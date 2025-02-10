import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Form from "./pages/Form";


function App() {

  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center align-items-center">
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="singIn" element={<SingIn />} />
          <Route path="form" element={<Form />} />
          <Route path="singUp" element={<SingUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

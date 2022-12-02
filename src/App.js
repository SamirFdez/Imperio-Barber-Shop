import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./views/login";
import { ForgotPassword } from "./views/forgotPassword";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
  );
}

export default App;

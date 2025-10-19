import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Elements/Navbar";
import Home from "./Components/Pages/Home";
import Blogs from "./Components/Pages/Blogs";
import Hunt from "./Components/Pages/Hunt";
import "./App.css";

function App() {
  return (
    <div className="main flex justify-center">
      {/* Navbar will stay visible on all pages */}
      <Navbar />

      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blogs />} />
        <Route path="/Hunt" element={<Hunt />} />
      </Routes>
    </div>
  );
}

export default App;

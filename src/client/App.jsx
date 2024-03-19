import { useState } from "react";
import Login from "./components/Login";
import AllIceCream from "./components/AllIcecream";
import SingleIceCream from "./components/SingleIcecream";
import NavBar from "./components/NavBar";
import AddUser from "./components/Register";
import CompanyDescription from "./components/AboutUs";

import { Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<AllIceCream />} />
          <Route
            path="/api/users/login"
            element={<Login setToken={setToken} />}
          />
          <Route
            path="/api/users/register"
            element={<AddUser setToken={setToken} />}
          />
          <Route path="/about-us" element={<CompanyDescription />} />
        </Routes>
      </main>

      <footer></footer>
    </>
  );
}

export default App;

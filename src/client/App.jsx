import Login from "./components/Login";
import AllIceCream from "./components/AllIcecream";
import SingleIceCream from "./components/SingleIcecream";
import NavBar from "./components/NavBar";
import AddUser from "./components/Register";
import CompanyDescription from "./components/AboutUs";
import Cart from "./components/Cart";
import NewFlavorForm from "./components/NewFlavor";
import Account from "./components/Account";
import UpdateForm from "./components/UpdateForm";
import Checkout from "./components/Checkout";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function signin() {
    setToken(localStorage.getItem("token"));
  }

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  return (
    <>
      <header>
        {/* <div></div> */}
        <h1 className="Title">Dream Cream</h1>
        <NavBar loggedIn={token != null} logout={logout} />
      </header>

      <main>
        <aside></aside>
        <Routes>
          <Route path="/" element={<AllIceCream token={token} />} />
          <Route
            path="/icecream/:id"
            element={<SingleIceCream token={token} />}
          />
          <Route
            path="/api/users/login"
            element={
              <Login token={token} setToken={setToken} signin={signin} />
            }
          />
          <Route
            path="/api/users/register"
            element={
              <AddUser token={token} setToken={setToken} signin={signin} />
            }
          />
          <Route
            path="/api/users/account"
            element={<Account token={token} />}
          />
          <Route
            path="/api/users/update-profile"
            element={<UpdateForm token={token} />}
          />
          <Route path="/Cart" element={<Cart token={token} />} />
          <Route path="/Checkout" element={<Checkout token={token} />} />
          <Route path="/about-us" element={<CompanyDescription />} />
          <Route path="/api/users/admin" element={<NewFlavorForm />} />
        </Routes>
        <aside></aside>
      </main>

      <footer>
        Dream Cream LLC
        <br></br>
        Contact us at 1-555-6969
        <br></br>
        Address: UAC Mars Base 6666 Hellas Planitia, Impact Basin, Mars, Milky
        Way Galaxy
      </footer>
    </>
  );
}

export default App;

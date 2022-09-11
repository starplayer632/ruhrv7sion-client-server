import React from "react";
//react Router for Routing
import {Route, Routes } from "react-router-dom";
//loading bootstrap min local
import "bootstrap/dist/css/bootstrap.min.css";


/** 
//import pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Error404 from "./pages/Error404";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/studentpage/LandingStudent";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Jobs from "./pages/Jobs.js";
import NewJobOffer from "./pages/NewJobOffer.js";
import Unauthorized from "./pages/auth/Unauthorized";
import Login from "./pages/auth/Login";
*/

import LandingStudent from "./pages/studentpage/LandingStudent";
//TUT
import Login from "./pages/TUT/Login";
import Unauthorized from "./pages/auth/Unauthorized";
import Error404 from "./pages/Error404";
import Register from "./pages/auth/Register";
import LinkPage from './pages/TUT/LinkPage';
import RequireAuth from './pages/TUT/RequireAuth';
import PersistLogin from "./pages/TUT/PersistLogin";
import Lounge from './pages/TUT/Lounge';
import Editor from './pages/TUT/Editor';
import Admin from './pages/TUT/Admin';
import Home from './pages/TUT/Home';
import Layout from './pages/TUT/Layout';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

//App as const -> as a function
const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="home" element={<LandingStudent />} />

          {/* we want to protect these routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
              <Route path="editor" element={<Editor />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
              <Route path="lounge" element={<Lounge />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<Error404 />} />
        </Route>
    </Routes>


     
  );
};

export default App;
/**
 *  {/**
      {/** Routing wihtout ROLES
      <BrowserRouter>
        {/** For now Header and Footer will stay the same until ROLES and Persistent User Login Authentication with JWT Tokens is been solved
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="./pages/Auth/Login" exact element={<Login />} />
          <Route path="/jobs" exact element={<Jobs />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/jobs/newJobOffer" exact element={<NewJobOffer />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" exact element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
 * 
 * 
 */

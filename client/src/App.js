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
import Jobs from "./pages/studentpage/Jobs.js";
import LandingStudent from "./pages/studentpage/LandingStudent";
import ProfilStudent from "./pages/studentpage/login/ProfilStudent";
import LegalTerms from "./pages/legalterms/legalterms.js";
import Home from "./pages/studentpage/LandingStudent";
import ComingSoon from "./pages/ComingSoon.js";
import LandingCompany from './pages/companypage/LandingCompany';
import LoginStudent from "./pages/auth/LoginStudent";
import LoginCompany from "./pages/auth/LoginCompany";
import Unauthorized from "./pages/auth/Unauthorized";
import Error404 from "./pages/Error404";
import Register from "./pages/auth/Register";
import StudentMatches from "./pages/studentpage/login/StudentMatches.js";
import Dashboard from "./pages/companypage/login/Dashboard.js";
import EditorFunnel from "./pages/companypage/login/EditorFunnel.js";
import EditorJobs from "./pages/companypage/login/EditorJobs.js";
import MatchesCompany from "./pages/companypage/login/Matches.js";
import ProfileCompany from "./pages/companypage/login/Profile.js";
import SeeAllFunnelConfigs from "./pages/companypage/login/SeeAllFunnelConfigs.js";
import ROLES from './context/roles_list';
import CreateNewFunnel from "./pages/companypage/login/CreateNewFunnel.js";
import CompanyCard from "./pages/companypage/login/CompanyCard.js";
//TUT
import LinkPage from './pages/TUT/LinkPage';
import RequireAuth from './pages/TUT/RequireAuth';
import PersistLogin from "./pages/TUT/PersistLogin";
import Lounge from './pages/TUT/Lounge';
import Editor from './pages/TUT/Editor';
import Admin from './pages/TUT/Admin';
//import Home from './pages/TUT/Home';
import Layout from './pages/TUT/Layout';



//App as const -> as a function
const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/** 
          * Layer 0: public studentpage 
          * Layer 1: public full sights after the Layer 1 --> Params are there but the pages needs to be edited
          */}
          <Route path="/" element={<Home />} />
          <Route path="home" element={<LandingStudent />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:jobsid" element={<ComingSoon />} />
          <Route path="legalterms" element={<LegalTerms />} />
          <Route path="zukunftsregister" element={<ComingSoon />} />
          <Route path="zukunftsregister/:companyuser" element={<ComingSoon />} /> 
          
          {/* Layer 0: public student auth */}
          <Route path="login" element={<LoginStudent />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="linkpage" element={<LinkPage />} />

          {/* Layer 1 (business/): public business */}
          <Route path="business/" element={<LandingCompany />} />
          <Route path="business/login" element={<LoginCompany />} />
          <Route path="business/register" element={<ComingSoon/>} />

          {/** 
          * !we want to protect these routes! 
          * Layer 1 (login/): Studentpage login (StudnetHub) routes where you need to be logged in
          * Layer 1 (business/): Companypage login (CompanyHub) routes where you need to be logged in
          */}
          <Route element={<PersistLogin />}>
            {/** You need to logged in as STUDENT or ADMIN in order ro access*/}
            <Route element={<RequireAuth allowedRoles={[ROLES.StudentUser, ROLES.Admin]} />}>
              <Route path="login/profile" element={<ProfilStudent />} />
              <Route path="login/matches" element={<StudentMatches />} />
              <Route path="login/matches/:fullmatch" element={<ComingSoon />} />
              <Route path="login/" element={<ComingSoon />} />
              <Route path="login/legalterms" element={<ComingSoon />} />
              <Route path="login/zukunftsregister" element={<ComingSoon />} />
              <Route path="login/zukunftsregister/:companyuser" element={<ComingSoon />} />
            </Route>
            {/** You need to logged in as COMPANY or ADMIN in order ro access*/}
            <Route element={<RequireAuth allowedRoles={[ROLES.CompanyUser, ROLES.Admin]} />}>
              <Route path="business/profile" element={<ProfileCompany />} />
              <Route path="business/matches" element={<MatchesCompany />} />
              <Route path="business/dashboard" element={<Dashboard />} />
              <Route path="business/editorfunnel" element={<EditorFunnel />} />
              <Route path="business/editorjobs" element={<EditorJobs />} />
              <Route path="business/createnewfunnel" element={<CreateNewFunnel />} />
              <Route path="business/seeallfunnelconfigs" element={<SeeAllFunnelConfigs />} />
              <Route path="business/companycard" element={<CompanyCard />} />
            </Route>
          </Route>

          {/* catch all / everything else --> ERROR404 */}
          <Route path="*" element={<Error404 />} />
        </Route>
    </Routes>


     
  );
};

export default App;

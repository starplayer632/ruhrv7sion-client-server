import React from "react";
//react Router for Routing
import { Route, Routes } from "react-router-dom";
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

import CompanyPage from "./pages/companypage/CompanyPage.js";
import FunnelEditor from "./pages/companypage/FunnelEditor";
import Unauthorized from "./pages/auth/Unauthorized";
import Login from "./pages/auth/Login";
*/
import Jobs from "./pages/studentpage/Jobs.js";
import LandingStudent from "./pages/studentpage/LandingStudent";
import ProfilStudent from "./pages/studentpage/login/ProfilStudent";
import LegalTerms from "./pages/legalterms/legalterms.js";
import Home from "./pages/studentpage/LandingStudent";
import ComingSoon from "./pages/ComingSoon.js";
import LandingCompany from "./pages/companypage/CompanyPage";
import LoginStudent from "./pages/auth/LoginStudent";
import LoginCompany from "./pages/auth/LoginCompany";
import Unauthorized from "./pages/auth/Unauthorized";
import Error404 from "./pages/errorpages/Error404";
import Register from "./pages/auth/Register";
import StudentMatches from "./pages/studentpage/login/StudentMatches.js";
import Dashboard from "./pages/companypage/login/Dashboard.js";
import EditorFunnel from "./pages/companypage/login/FunnelEditor.js";
import EditorJobs from "./pages/companypage/login/EditorJobs.js";
import MatchesCompany from "./pages/companypage/login/Matches.js";
import ProfileCompany from "./pages/companypage/login/Profile.js";
import SeeAllFunnelConfigs from "./pages/companypage/login/SeeAllFunnelConfigs.js";
import ROLES from "./context/roles_list";
import CreateNewFunnel from "./pages/companypage/login/CreateNewFunnel.js";
import CompanyCard from "./pages/companypage/login/CompanyCard.js";
import LandingStudentLogin from "./pages/studentpage/login/LandingStudentLogin";
import Zukunftsregister from "./pages/studentpage/Zukunftsregister.js";
import ZukunftsregisterLogin from "./pages/studentpage/login/ZukunftsregisterLogin.js";
import JobsLogin from "./pages/studentpage/login/JobsLogin.js";
import CompanyJobs from "./pages/companypage/login/CompanyJobs.js";
import CompanyFunnels from "./pages/companypage/login/CompanyFunnels.js";
//TUT
import LinkPage from "./pages/TUT/LinkPage";
import RequireAuth from "./pages/TUT/RequireAuth";
import PersistLogin from "./pages/TUT/PersistLogin";
import Lounge from "./pages/TUT/Lounge";
import Editor from "./pages/TUT/Editor";
import Admin from "./pages/TUT/Admin";
//import Home from './pages/TUT/Home';
import Layout from "./pages/TUT/Layout";

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
        <Route path="impressum" element={<LegalTerms />} />
        <Route path="zukunftsregister" element={<Zukunftsregister />} />
        <Route path="zukunftsregister/:companyuser" element={<ComingSoon />} />

        {/* Layer 0: public student auth */}
        <Route path="login" element={<LoginStudent />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="linkpage" element={<LinkPage />} />

        {/* Layer 1 (business/): public business */}
        <Route path="business/" element={<LandingCompany />} />
        <Route path="business/login" element={<LoginCompany />} />
        <Route path="business/register" element={<ComingSoon />} />
        {/**
         * !we want to protect these routes!
         * Layer 1 (login/): Studentpage login (StudnetHub) routes where you need to be logged in
         * Layer 1 (business/): Companypage login (CompanyHub) routes where you need to be logged in
         */}
        <Route element={<PersistLogin />}>
          {/** You need to logged in as STUDENT or ADMIN in order ro access*/}
          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.StudentUser, ROLES.Admin]} />
            }
          >
            <Route path="login/home" element={<LandingStudentLogin />} />
            <Route path="login/matches" element={<StudentMatches />} />
            <Route path="login/jobs" element={<JobsLogin />} />
            <Route path="login/matches/:fullmatch" element={<ComingSoon />} />
            <Route path="login/impressum" element={<ComingSoon />} />
            <Route
              path="login/zukunftsregister"
              element={<ZukunftsregisterLogin />}
            />
            <Route
              path="login/zukunftsregister/:companyuser"
              element={<ComingSoon />}
            />
            <Route path="login/profile" element={<ProfilStudent />} />
          </Route>
          {/** You need to logged in as COMPANY or ADMIN in order ro access*/}
          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.CompanyUser, ROLES.Admin]} />
            }
          >
            <Route path="business/profile" element={<ProfileCompany />} />
            <Route path="business/matches" element={<MatchesCompany />} />
            <Route
              path="business/matches/newestmatch"
              element={<MatchesCompany />}
            />
            <Route path="business/dashboard" element={<Dashboard />} />
            <Route path="business/funneleditor" element={<EditorFunnel />} />
            <Route path="business/jobs" element={<CompanyJobs />} />
            <Route path="business/jobs/:jobsid" element={<EditorJobs />} />
            <Route
              path="business/jobs/createnewoffer"
              element={<CompanyJobs />}
            />
            <Route path="business/funnels" element={<CompanyFunnels />} />
            <Route
              path="business/funnels/editor/:funnelname"
              element={<CompanyFunnels />}
            />
            <Route
              path="business/funnels/createnewfunnel"
              element={<CreateNewFunnel />}
            />a
            <Route
              path="business/seeallfunnelconfigs"
              element={<SeeAllFunnelConfigs />}
            />
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

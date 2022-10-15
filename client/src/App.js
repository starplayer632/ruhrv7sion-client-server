import React from "react";
//react Router for Routing
import { Route, Routes } from "react-router-dom";
//loading bootstrap min local
import "bootstrap/dist/css/bootstrap.min.css";


import Jobs from "./pages/studentpage/Jobs.js";
import LandingStudent from "./pages/studentpage/LandingStudent";
import ProfilStudent from "./pages/studentpage/login/ProfilStudent";
import LegalTerms from "./pages/legalterms/legalterms.js";
import Home from "./pages/studentpage/LandingStudent";
import ComingSoon from "./pages/ComingSoon.js";
import LandingCompany from "./pages/companypage/CompanyPage";
import LoginStudent from "./pages/authentication/LoginStudent";
import LoginCompany from "./pages/authentication/LoginCompany";
import Unauthorized from "./pages/authentication/Unauthorized";
import Error404 from "./pages/errorpages/Error404";
import Register from "./pages/authentication/Register";
import StudentMatches from "./pages/studentpage/login/StudentMatches.js";
import Dashboard from "./pages/companypage/login/Dashboard.js";
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
import FunnelDashboard from "./pages/companypage/login/FunnelDashboard.js";
import EditorFunnel from "./pages/companypage/login/EditorFunnel.js";
import ViewFunnel from "./pages/companypage/login/ViewFunnel.js";
import ViewFunnelPublic from "./pages/studentpage/ViewFunnelPublic";
import CompanyJobsEditor from "./pages/companypage/login/CompanyJobsEditor";
import RequireAuth from "./context/RequireAuth";
import PersistLogin from "./context/PersistLogin";
import Layout from "./context/Layout";
import Events from "./pages/events/Events";

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
        <Route path="funnels/:funnelid" element={<ViewFunnelPublic />} />
        <Route path="jobs/:jobsid" element={<ComingSoon />} />
        <Route path="impressum" element={<LegalTerms />} />
        <Route path="zukunftsregister" element={<Zukunftsregister />} />
        <Route path="zukunftsregister/:companyuser" element={<ComingSoon />} />
        <Route path="events/techlabs" element={<Events eventid="techlabs"/>} />
        

        {/* Layer 0: public student auth */}
        <Route path="login" element={<LoginStudent />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

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
          <Route element={<RequireAuth allowedRoles={[ROLES.StudentUser, ROLES.Admin]} />}>
            <Route path="login/home" element={<LandingStudentLogin />} />
            <Route path="login/matches" element={<StudentMatches />} />
            <Route path="login/jobs" element={<JobsLogin />} />
            <Route path="login/matches/:fullmatch" element={<ComingSoon />} />
            <Route path="login/impressum" element={<ComingSoon />} />
            <Route path="login/zukunftsregister" element={<ZukunftsregisterLogin />} />
            <Route path="login/zukunftsregister/:companyuser" element={<ComingSoon />} />
            <Route path="login/profile" element={<ProfilStudent />} />
          </Route>
          {/** You need to logged in as COMPANY or ADMIN in order ro access*/}
          <Route element={ <RequireAuth allowedRoles={[ROLES.CompanyUser, ROLES.Admin]} /> }>
            <Route path="business/profile" element={<ProfileCompany />} />
            <Route path="business/matches" element={<MatchesCompany />} />
            <Route path="business/matches/newestmatch" element={<MatchesCompany />} />
            <Route path="business/dashboard" element={<Dashboard />} />
            <Route path="business/editor/newfunnel" element={<CreateNewFunnel />} />
            <Route path="business/jobs" element={<CompanyJobs />} />
            <Route path="business/jobs/editor/:jobsid" element={<CompanyJobsEditor />} />
            <Route path="business/jobs/createnewoffer" element={<CompanyJobs />} />
            <Route path="business/funnels" element={<FunnelDashboard />} />
            <Route path="business/funnels/editor/:funnelid" element={<EditorFunnel />} />
            <Route path="business/funnels/createnewfunnel" element={<CreateNewFunnel />} />
            <Route path="business/funnels/:funnelid" element={<ViewFunnel />} />
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

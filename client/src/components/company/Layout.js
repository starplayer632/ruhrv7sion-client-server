/**
 * FROM MARIUSZ just imported
 */
import React from "react";
import { Outlet } from "react-router-dom";
import LandingPageNav from "./LandingPageNav";

export default function Layout() {
  return (
    <>
      <LandingPageNav />
      <Outlet />
    </>
  );
}

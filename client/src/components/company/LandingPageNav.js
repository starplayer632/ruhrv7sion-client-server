/**
 * FROM MARIUSZ just imported
 */
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function LandingPageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="CompanyPage">CompanyPage</Link>
        </li>
      </ul>
    </nav>
  );
}

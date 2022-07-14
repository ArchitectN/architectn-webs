import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product

//About Auth
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";

import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

//About User
import NotFoundPage from './views/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="wrapper">
        <NavBar />
        <div className="contentsWrapSpacer" />
        <Route>
          <div className="contentsWrap">
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
          </div>
          <Route component={Auth(NotFoundPage, null)} />
        </Route>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;

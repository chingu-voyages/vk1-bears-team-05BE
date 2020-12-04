import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import EditProfilePage from "./components/pages/EditProfilePage";

const App = () => {
  return (
    <div>
      <Header />
      <EditProfilePage />
      <Footer />
      <script
        src='https://unpkg.com/react/umd/react.production.min.js'
        crossorigin
      ></script>

      <script
        src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
        crossorigin
      ></script>

      <script
        src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
        crossorigin
      ></script>
    </div>
  );
};

export default App;

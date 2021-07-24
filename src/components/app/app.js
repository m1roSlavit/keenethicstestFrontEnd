import React from "react";

import Header from "../header";
import AdminPanel from "../admin-panel";
import './app.scss'
import Footer from "../footer";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <AdminPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
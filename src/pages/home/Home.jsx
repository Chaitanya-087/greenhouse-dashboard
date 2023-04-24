import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../../components";
import "./home.scss";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='home'>
      <Sidebar />
      <div className='container'>
        <Navbar setOpen={setOpen} />
        <section className='details'>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const RootLayouts = () => {
  return (
    <>
      <section className="sticky top-0 z-50 w-full">
        <Navbar />
      </section>
      <main className="grow">
        <Outlet />
      </main>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default RootLayouts;

import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Header from "../components/header.component";
import Timeline from "../components/timeline.component";
import Sidebar from "../components/sidebar.component";

import LoggedInUserContext from "../context/logged-in-user.context";

import useUser from "../hooks/use-user";

const DashboardPage = ({ user: loggedInUser }) => {
  const { user } = useUser(loggedInUser.uid);

  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user }}>
      <div className="bg-gray-background">
        <Header />
        <div
          className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg
          max_1:flex max_1:justify-center "
        >
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
};

export default DashboardPage;

DashboardPage.propTypes = {
  user: PropTypes.object.isRequired,
};

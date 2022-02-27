import React, { useContext } from "react";

import User from "./user.component";
import Suggestions from "./suggestions.component";

import loggedInUserContext from "../context/logged-in-user.context";

const Sidebar = () => {
  const {
    user: { docId, fullName, username, userId, following },
  } = useContext(loggedInUserContext);

  return (
    <div className="p-4 col-span-1 max_1:hidden">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
};

export default Sidebar;

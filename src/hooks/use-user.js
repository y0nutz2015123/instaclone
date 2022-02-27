import { useState, useEffect } from "react";

import { getUserByUserId } from "../services/firebase.services";

function useUser(userId) {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    const getUserObjByUserId = async () => {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {}); // if is a user or not
    };

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
}

export default useUser;

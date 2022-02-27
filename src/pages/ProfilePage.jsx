import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import Header from "../components/header.component";
import UserProfile from "../components/user-profile.component";

import { getUserByUsername } from "../services/firebase.services";

function ProfilePage() {
  const { username } = useParams();
  console.log("username", username);

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checkUserExists = async () => {
      const user = await getUserByUsername(username);

      if (user?.length > 0) {
        setUser(user[0]);
      } else {
        navigate(ROUTES.NOT_FOUND);
      }
    };

    checkUserExists();
    console.log("user", user);
  }, [username, navigate]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}

export default ProfilePage;

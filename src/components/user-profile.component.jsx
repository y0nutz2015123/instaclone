import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";

import ProfileHeader from "./profile-header.component";
import ProfilePhotos from "./profile-photos.component";

import { getUserPhotosByUsername } from "../services/firebase.services";

const UserProfile = ({ user }) => {
  // reducer make the initialState into the new state when i dispatch
  const reducer = (state, newState) => ({
    ...state,
    ...newState,
  });

  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const getProfileInfoAndPhotos = async () => {
      const photos = await getUserPhotosByUsername(user.username);

      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    };

    getProfileInfoAndPhotos();
  }, [user]);

  return (
    <>
      <ProfileHeader
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <ProfilePhotos photos={photosCollection} />
    </>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

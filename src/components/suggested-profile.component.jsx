import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DEFAULT_IMAGE_PATH } from "../constants/paths";

import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../services/firebase.services";

const SuggestedProfile = ({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) => {
  const [followed, setFollowed] = useState(false);

  const handleFollowUser = async () => {
    setFollowed(true);

    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);

    await updateFollowedUserFollowers(profileDocId, userId, false);
  };

  return !followed ? (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center justify-between">
        <img
          src={`images/avatars/${username}.jpg`}
          alt=""
          className="rounded-full w-8 flex mr-3"
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE_PATH;
          }}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        onClick={handleFollowUser}
        type="button"
        className="text-xs font-bold text-blue-medium"
      >
        Follow
      </button>
    </div>
  ) : null;
};

export default SuggestedProfile;

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};

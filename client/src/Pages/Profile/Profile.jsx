/** @format */

import React from "react";
import ProfileHeroSection from "../../Components/ProfileHeroSection";
import Error from "../../Components/Error";
import { useAuth0 } from "@auth0/auth0-react";
function Profile() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return <div>{isAuthenticated ? <ProfileHeroSection /> : <Error />}</div>;
}

export default Profile;

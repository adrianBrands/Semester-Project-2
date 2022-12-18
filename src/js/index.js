import { signUpFormListener } from "./listeners/auth/signUp.js";
import { signInFormListener } from "./listeners/auth/signIn.js";
import { signOutUser } from "./listeners/auth/signOut.js";
import { isLoggedIn } from "./profile/loggedIn.js";
import { changeAvatarImage } from "./listeners/Profile/avatar.js";
import { userProfile } from "./profile/profile.js";
import { userProfileImage } from "./profile/profile.js";
import { bidListener } from "./listeners/Profile/credits.js";
import { displayListing } from "./listings/listings_id.js";
import { displayListings } from "./listings/listings.js";
import { testListings } from "./profile/profileListings.js";
import { createFormListener } from "./listings/create.js";

if (location.pathname === "/index.html") {
  signUpFormListener();
  signInFormListener();
  displayListings();
}

if (location.pathname === "/profile.html") {
  changeAvatarImage();
  userProfile();
  testListings();
  createFormListener();
}

if (location.pathname === "/listing.html") {
  bidListener();
  displayListing();
  signUpFormListener();
  signInFormListener();
}

signOutUser();
isLoggedIn();
userProfileImage();

import { signUpFormListener } from "./listeners/auth/signUp.js";
import { signInFormListener } from "./listeners/auth/signIn.js";

import { signOutUser } from "./listeners/auth/signOut.js";
import { isLoggedIn } from "./profile/loggedIn.js";

import { changeAvatarImage } from "./listeners/Profile/avatar.js";

if (location.pathname === "/index.html"){
  signUpFormListener();
  signInFormListener();
}

if(location.pathname === "/profile.html"){
  changeAvatarImage();
}

signOutUser();
isLoggedIn();



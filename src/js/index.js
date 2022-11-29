import { signUpFormListener } from "./listeners/auth/signUp.js";
import { signInFormListener } from "./listeners/auth/signIn.js";

import { signOutUser } from "./listeners/auth/signOut.js";
import { isLoggedIn } from "./profile/loggedIn.js";

if (location.pathname === "/index.html"){
  signUpFormListener();
  signInFormListener();
}

signOutUser();
isLoggedIn();


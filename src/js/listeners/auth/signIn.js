import { signInUser } from "../../api/auth/signIn.js";

export function signInFormListener() {
  const signInForm = document.querySelector("#signIn-modal");
  
  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const signInForm = event.target;
    const formData = new FormData(signInForm);
    const user = Object.fromEntries(formData.entries());
    
    signInUser(user);

    
  });

} 
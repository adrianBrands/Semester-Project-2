import { registerUser } from "../../api/auth/signUp.js";

export function signUpFormListener() {
  const signUpForm = document.querySelector("#signUp-modal");
  
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const signUpForm = event.target;
    const formData = new FormData(signUpForm);
    const user = Object.fromEntries(formData.entries());
    
    

    registerUser(user);
  });

} 
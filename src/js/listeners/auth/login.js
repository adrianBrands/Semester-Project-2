import { loginUser } from "../../api/auth/login.js";

export function loginFormListener() {
  const loginForm = document.querySelector("#login-modal");
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginForm = event.target;
    const formData = new FormData(loginForm);
    const user = Object.fromEntries(formData.entries());
    
    

    loginUser(user);
  });

} 
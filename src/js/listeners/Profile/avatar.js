import { userInfo } from "../../localStorage/storage.js";
import { updateAvatar } from "../../api/profile/updateAvatar.js";

const avatarInput = document.querySelector(".avatar-input");
const storedUser = userInfo();

export function changeAvatarImage() {
  const avatarForm = document.querySelector("#avatar-image");
  
  
  avatarForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const avatarForm = event.target;
    const formData = new FormData(avatarForm);
    const avatar = Object.fromEntries(formData.entries());

    updateAvatar(avatar);

    
  });

}


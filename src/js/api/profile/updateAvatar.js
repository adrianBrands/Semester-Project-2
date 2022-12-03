import { baseURL } from "../url.js";
import { userInfo } from "../../localStorage/storage.js";
import { fetchWithToken } from "../token/fetchWithToken.js";
import * as storage from "../../localStorage/storage.js"

const userName = userInfo();

const avatarPath = `profiles/${userName.userName}/media`;
const method = "put";

export async function updateAvatar(avatar){
  const updateAvatarURL = `${baseURL}${avatarPath}`;
  
  const response = await fetchWithToken(updateAvatarURL ,{
    method,
    body: JSON.stringify(avatar),
  });

  if (response.ok){
    function update(){
      const existingAvatar = storage.get("userStorage")
      existingAvatar.avatar = avatar.avatar;
      localStorage.setItem("userStorage", JSON.stringify(existingAvatar));
    }
    
    update();

    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
   
  } else {
    console.log(response);
  }

}

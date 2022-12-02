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
      const existing = storage.get("userStorage")
      existing.avatar = avatar.avatar;
      localStorage.setItem("userStorage", JSON.stringify(existing));

    }
    update()
   
  } else {
    console.log(response);
  }

}

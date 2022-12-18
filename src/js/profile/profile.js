import { userInfo } from "../localStorage/storage.js"

/**
 * Creates user profile html elements with the stored user data in local storage
 */
export function userProfile() {
  const userDiv = document.querySelector(".userInfo");

  const userImageDiv = document.querySelector(".userImage");
  const userImage = document.createElement("img");
  userImage.setAttribute("src", userInfo().userAvatar);
  userImage.setAttribute("width", 200);
  userImage.setAttribute("alt", "picture of the users profile image");
  userImage.classList.add("mx-auto","d-block", "bd-placeholder-img", "rounded-circle", "img-fluid");
  userImageDiv.appendChild(userImage)

  const userName = document.createElement("h1");
  userName.classList = "fs-3";
  userName.innerText = `${userInfo().userName}`;
  userDiv.appendChild(userName);

  const userCredits = document.createElement("h3");
  userCredits.classList = "fs-5 mt-4";
  userCredits.innerText = `Credits: $${userInfo().userCredits}`;
  userDiv.appendChild(userCredits);
}

export function userProfileImage(){
  const userImageContainer = document.querySelector(".userProfileImage");
  const userImage = document.createElement("img");
  userImage.setAttribute("src", userInfo().userAvatar);
  userImage.className = "rounded-circle";
  userImage.setAttribute("alt", "picture of the users profile image");
  userImage.setAttribute("width", 55);
  userImage.setAttribute("height", 55);

  userImageContainer.append(userImage);
}



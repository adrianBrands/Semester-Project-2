import { userInfo } from "../localStorage/storage.js"

export function userProfile() {
  const userInfoFunction = userInfo();
  const userDiv = document.querySelector(".userInfo");

  const userImageDiv = document.querySelector(".userImage");
  const userImage = document.createElement("img");
  userImage.setAttribute("src", userInfoFunction.userAvatar);
  userImage.setAttribute("width", 200);
  userImage.classList.add("mx-auto","d-block", "bd-placeholder-img", "rounded-circle", "img-fluid");
  userImageDiv.appendChild(userImage)

  const userName = document.createElement("h1");
  userName.classList = "fs-3";
  userName.innerText = `${userInfoFunction.userName}`;
  userDiv.appendChild(userName);

  const currentListings = document.createElement("h2");
  currentListings.classList = "fs-5 mt-3";
  currentListings.innerText = `Current listings: ...`;
  userDiv.appendChild(currentListings);

  const userCredits = document.createElement("h3");
  userCredits.classList = "fs-5 mt-3";
  userCredits.innerText = `Credits: ${userInfoFunction.userCredits}`;
  userDiv.appendChild(userCredits);
}

import { userInfo } from "../localStorage/storage.js"

const userInfoFunction = userInfo()
const userDiv = document.querySelector(".userInfo");

const userName = document.createElement("h1");
userName.classList = "fs-3"
userName.innerText = `${userInfoFunction.userName}`;
userDiv.appendChild(userName);

const currentListings = document.createElement("h2");
currentListings.classList = "fs-5 mt-3";
currentListings.innerText = `Current listings: ...`;
userDiv.appendChild(currentListings);

const userCredits = document.createElement("h3");
userCredits.classList = "fs-5 mt-3";
userCredits.innerText = `${userInfoFunction.userCredits}`;
userDiv.appendChild(userCredits);





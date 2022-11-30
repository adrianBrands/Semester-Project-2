//import { userInfo } from "../localStorage/storage.js"

//const userName = document.getElementById("user-name")

//userName.innerHTML = `${userInfo(userName)}`;


const test = {}

export const userInfo = (user) => {
  const userStorage = localStorage.getItem("userStorage");
  const parseUserObj = JSON.parse(userStorage);
  const {name:userName, email:userEmail, credits:userCredits, avatar:userAvatar } = parseUserObj;
  console.log(userCredits)
  return user = [userName, userEmail, userCredits];
 
};

const check = userInfo().filter(test => test.length) 

console.log(check)


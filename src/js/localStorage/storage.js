export const store = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) =>  {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const remove = (key) => {
  localStorage.removeItem(key); 
};


export const userInfo = () => {
  const userStorage = localStorage.getItem("userStorage");
  if(userStorage){
    const parseUserObj = JSON.parse(userStorage);
    const {name:userName, email:userEmail, credits:userCredits, avatar:userAvatar } = parseUserObj;
    return {userName, userEmail, userCredits, userAvatar};
  } else {
    return false
  }
  
 
};
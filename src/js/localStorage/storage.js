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
  const parseUserObj = JSON.parse(userStorage);
  return {name:userName, email:userEmail, credits:userCredits, avatar:userAvatar } = parseUserObj;
};
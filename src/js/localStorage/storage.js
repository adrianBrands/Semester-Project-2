/**
 * sets an item in local storage
 * @param {string} key 
 * @param {any} value 
 */
export const store = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * gets the stored value in local storage
 * @param {string} key 
 * @returns {any} parsed value 
 * @returns {null} if key does not exist
 */
export const get = (key) => {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
};

/**
 * removes item from local storage
 * @param {string} key 
 */
export const remove = (key) => {
  localStorage.removeItem(key);
};

/**
 * Gets the stored user data in local storage
 * @returns {Object}
 */
export const userInfo = () => {
  const userStorage = localStorage.getItem("userStorage");
  if (userStorage) {
    const parseUserObj = JSON.parse(userStorage);
    const {
      name: userName,
      email: userEmail,
      credits: userCredits,
      avatar: userAvatar,
    } = parseUserObj;
    return { userName, userEmail, userCredits, userAvatar };
  } else {
    return false;
  }
};

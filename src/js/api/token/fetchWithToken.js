import { get } from "../../localStorage/storage.js";

export function headers() {
  return {
    "content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${get("token")}`,
  };
}


export async function fetchWithToken(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}


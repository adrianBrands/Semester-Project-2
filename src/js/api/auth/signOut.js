import { remove } from "../../localStorage/storage.js"

export function signOut() {
  remove("token");
  remove("userStorage");
}

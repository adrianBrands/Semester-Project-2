import { remove } from "../../localStorage/storage.js"

/**
 * Signing out user and removing the stored content in local storage
 */
export function signOut() {
  remove("token");
  remove("userStorage");
}

import { getCredits } from "../api/profile/credits.js";
import * as storage from "../localStorage/storage.js";

/**
 * updates the stored amount of credits in local storage
 */
export async function credits() {
  const credits = await getCredits();
  const existingCredit = storage.get("userStorage");
  existingCredit.credits = credits.credits;
  localStorage.setItem("userStorage", JSON.stringify(existingCredit));
}

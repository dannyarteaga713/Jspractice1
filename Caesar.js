// --- PROJECT CAESAR: PHASE 1 ---

const friend = "BRUTUS";
const shiftValue = 3;

// Step 1: Store the Latin alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2: Find the index of the first letter of Caesar's friend
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

/* 
 * Question 1: Why is the result 1 instead of 2 for "B"?
 * Answer: JavaScript uses zero-based indexing. The first item of a string 
 * is accessed at index 0 ('a'), so 'b' is at index 1.
 */

// Step 3: Shift the first letter by the shift value (Initial logic)
const initialNewIndex = index + shiftValue;
const initialEncryptedFirstLetter = alphabet[initialNewIndex];

/* 
 * Question 2: Which operator helps us wrap around beyond "z"?
 * Answer: The modulus operator (%) ensures that if the new index exceeds 
 * the alphabet's length (25), it wraps back to 0. 
 */

// Step 4: Determine the length of the alphabet
const alphabetLength = alphabet.length;

// Step 5: Shift the first letter with wrap-around logic (Production-ready)
const finalNewIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[finalNewIndex];

// Step 6: Extract a 3-character teaser from the final encrypted message
const encryptedMessage = "EUXWXV"; // Assuming the full message was processed
const teaserMessage = encryptedMessage.slice(0, 3);

// --- LOGGING RESULTS FOR REVIEW ---
console.log(`Original Friend: ${friend}`);
console.log(`Encrypted First Letter: ${encryptedFirstLetter}`);
console.log(`Teaser Message: ${teaserMessage}`);
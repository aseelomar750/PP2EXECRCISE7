const friend = "BRUTUS" //  BF of Caesr
const shiftValue = 3; // shift value 3 to the right
// 
const alphabet = "abcdefghijklmnopqrstuvwxyz"; // "ABCDEFGHIJKLMNOPQRSTUVWXY letters"

let encryptedName = "";  // variable name that will hold the encrypted letters

for (let i = 0; i < friend.length; i++) {
    const currentLetter=friend[i];
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase()); // get the index of the current letter in the alphabet letters
    // console.log(currentIndex)
    // console.log(currentLetter);

    const newIndex = (currentIndex + shiftValue) % alphabet.length;// shift the index and make sure  go byond z letter and return from beginning
    //  console.log(newIndex);
    encryptedName += alphabet[newIndex].toUpperCase(); // it will result "EUXWXV" as the encrypted letter from BRUTUS
     console.log(encryptedName);
}

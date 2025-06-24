const userInput = document.querySelector("#user-input");
const message = document.querySelector("#msg");
const userform = document.querySelector("#form");

const checkPalindrome = (userText) => {
  let reverseText = userText.split("").reverse().join("");
  if (userText === reverseText) {
    message.textContent = `${userText} is a palindrome word`;
  } else {
    message.textContent = `${userText} is not a palindrome word`;
  }
};

userform.addEventListener("submit", (e) => {
  e.preventDefault();
  let userText = userInput.value.toLowerCase();
  checkPalindrome(userText);
});

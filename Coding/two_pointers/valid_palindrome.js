// Valid Palindrome
// Determine whether a string is a palindrome, ignoring non-alphanumeric characters and case. Examples:

// Input: Do geese see God? Output: True

// Input: Was it a car or a cat I saw? Output: True

// Input: A brown fox jumping over Output: False

// Function to check if a given character is alphanumeric (letters and numbers only)
function isAlphaNumeric(s) {
  // Regular expression to check if the string consists only of alphabets (both lowercase and uppercase) and numbers
  return /^[a-zA-Z0-9]*$/.test(s);
}

function isPalindrome(str) {
  // Convert the input string to lowercase and split it into an array of characters
  let input = str.toLowerCase().split("");

  // Set the right pointer at the last index of the input array
  let rightPointer = input.length - 1;

  // Iterate through the array with a left pointer starting from the beginning
  for (let leftPoniter = 0; leftPoniter <= rightPointer; ) {
    // Skip non-alphanumeric characters from the left side
    if (!isAlphaNumeric(input[leftPoniter])) {
      leftPoniter++; // Move left pointer to the right
    }
    // Skip non-alphanumeric characters from the right side
    else if (!isAlphaNumeric(input[rightPointer])) {
      rightPointer--; // Move right pointer to the left
    }
    // If both characters are alphanumeric, compare them
    else {
      // If the characters at both pointers do not match, return false (not a palindrome)
      if (input[leftPoniter] !== input[rightPointer]) {
        return false;
      }

      // Move both pointers inward after a successful comparison
      leftPoniter++;
      rightPointer--;
    }
  }

  return true;
}

let result = isPalindrome("Was it a car or a cat I saw?");
console.log(result);

// REVERSE STRING FUNCTION

// This function should take a string as a parameter, and when printed to the console,
// should return the same string, but reversed.

// "hello" should return "olleh".

// Whatever the function returns should be stored in a variable.

// After the function works, implement a boolean - for example, one that prints if a certain condition is true.

// BEFORE you look it up, try the FOR loop!  8:57 pm, Monday 8/7.  Continue this tomorrow.

function reverse_word(word) {
  var new_word = "";
  for (var i = word.length - 1; i >= 0; i--) {
    new_word += word[i];
  }
    return new_word;
}


var non_palindromic_reversed_word = reverse_word("encyclopedia");

if ("apples" != "oranges") {
  console.log(non_palindromic_reversed_word);
}

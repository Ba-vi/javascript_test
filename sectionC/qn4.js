function isPalindrome(word){
    let new_word = word.toString().split("").reverse().join("");
    return word === new_word;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("myname"));
console.log(isPalindrome("carrace"));
console.log(isPalindrome("racecar"));



const input = document.getElementById("input");
const checkButton = document.getElementById("check-button");

checkButton.addEventListener("click" , () => {
    checkPalindrome();
})

function reverseString(str){
    return str.split("").reverse().join("")
}

function checkPalindrome(){
    const value = input.value;
    const reverse = reverseString(value);

    if(value === reverse){
        alert("It's a palindrome!")
    } else {
        alert("Not a palindrome.")
    }
    
    input.value = "";
}
document.getElementById("check-btn").addEventListener("click", function() {
    let userInput = document.getElementById("text-input").value;
    let resultMessage = document.getElementById("result");
    
    if (userInput.trim() === "") {
        alert("Please input a value.");
        return;
    }
    
    let originalText = userInput;
    let cleanedText = userInput.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let reversedText = cleanedText.split("").reverse().join("");
    
    if (cleanedText === reversedText) {
        resultMessage.innerText = originalText + " is a palindrome.";
    } else {
        resultMessage.innerText = originalText + " is not a palindrome.";
    }
});
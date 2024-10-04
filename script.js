function generateRandomNumber() {
    let max = 1000;
    let min = 1;
    document.getElementById("number").innerHTML = Math.floor(Math.random() * max) + min;
}
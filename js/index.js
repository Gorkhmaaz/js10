///Task 1
function compareNumbers(x,y){
    if(x < y){
        return -1
    } else if (x > y){
        return 1
    } else {
        return 0
    }
}
console.log(compareNumbers(1,2))
console.log(compareNumbers(2,1))
console.log(compareNumbers(2,2))

///Task 2
function factorial(num){
    let sum = 1
    for (let i = 1; i <= num; i += 1){
        sum *= i
    }
    return sum
}
console.log(factorial(7))

///Task 3
function makeNumber(a, b, c) {
    return a.toString() + b.toString() + c.toString();
}

console.log(makeNumber(1, 4, 9));  

////Task 4
function calculateRectangle(width,length){
    return width * length
}
console.log(calculateRectangle(5,7))

function calculateSide(side){
    return side * side
}
console.log(calculateSide(5,5))

////Task 5
function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

console.log(isPerfectNumber(6));  
console.log(isPerfectNumber(28));  
console.log(isPerfectNumber(496));  
console.log(isPerfectNumber(12)); 

///Task 7
function formatTime(hours, minutes, seconds) {
    minutes = minutes || 0;
    seconds = seconds || 0;
    let formattedTime = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds);
    
    console.log(formattedTime);
}

formatTime(9, 30, 45);  

////Task 8
function timeToSeconds(hours,minutes,seconds){
    return hours * 3600 + minutes * 60 + seconds
}
console.log(timeToSeconds(13,15,11))

///Task 9
function secondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
    let formattedTime = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);

    return formattedTime;
}

console.log(secondsToTime(3661));  
console.log(secondsToTime(7200));  
console.log(secondsToTime(12345)); 

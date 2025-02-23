function shout(string) {
    return string .toUpperCase();
}
console.log(shout("hello"));


function whisper(string){
    return string .toLowerCase();
}
console.log(whisper("HELLO"));


function logShout(string) {
    const upperCaseString = string .toUpperCase();
    console.log(upperCaseString);     
}
logShout("hello");

function logWhisper(string) {
    const upperCaseString = string .toLowerCase();
    console.log(upperCaseString);
}
logShout("HELLO");


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }   else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }   else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
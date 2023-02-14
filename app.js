function talk() {
 var know = {
 "hi":"hello how are you doing!!",
 
 "who are you": "Hello, I am genie",
 "how are you": "Good :),How are you doing",
 "what can i do for you": "Bring me a cup of Tea..!!",
 "What's up":
 " i dont have what's up",
 ok: "Thank You So Much ",
 bye: "Okay! Will meet soon..",
 };
 var user = document.getElementById("userBox").value;
 document.getElementById("chatLog").innerHTML = user + "<br>";
 if (user in know) {
 document.getElementById("chatLog").innerHTML = know[user] +
"<br>";
 } else {
 document.getElementById("chatLog").innerHTML =
 "Sorry,I didn't understand <br>";
 }
}
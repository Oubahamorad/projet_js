let subscribe = prompt(`Hello, are you here to : subscribe Or login  or changing_the_password ?`);


let userDatabase = [
    {
        fullname: "morad",
        userEmail: "email",
        age : "Number",
        userPassword: "password",
     
    }

];

// If the user chooses to register, here are the details they must enter

if (subscribe == `subscribe` ) 
{
let fullname = prompt(" the  fullname ")

let name = fullname.trim().charAt(0).toUpperCase().match(/[0-9@]/) + fullname.slice(1)  ;
const arr = name.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
name  = arr.join(" ");

while (name.length <= 6) {
    name = prompt("the  name should containe   6 characters ! insert  a valide nam")

}

for (let index = 0; index < userDatabase.length; index++) {
    const element = fullname[index];
    while (name == element.fullname ) {
        name = prompt(" the  fullname should be unique")
}
}
console.log(name);


let userEmail = prompt("insert your email ?");
let atpos = userEmail.indexOf("@");
let dotpos = userEmail.lastIndexOf(".");

if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    alert("Not a valid e-mail address");
while (userEmail.length <= 10) {
userEmail = prompt("the  Email should containe   10 characters ! insert  a valide Email")
    
}
}
console.log(userEmail);

let age = parseInt(prompt("Entre Age :"))

if (age.trim().match(/\D/) || age.length != 0 || age.trim().length >= 3) {
    alert("valide age")
    while (age != Number) {
age = parseInt(prompt("Entre Age :"))
break
}

}
console.log(age);






}

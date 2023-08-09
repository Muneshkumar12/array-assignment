var users = [];
console.log(users.length)
console.log(users)
users[5] = "info@gmail.com";
console.log(users);
users[0]= "iHunar";
console.log(users);
users[55] = "issiklllers"
console.log(users)
var mobileNumber = prompt("enter your mobile number")
if(mobileNumber === "" || mobileNumber === null){
    var name = prompt("enter your Name")
    if(name === "" || name === null){
        users.shift()
       console.log(users)
    }
}else{
  users.push("iHunar dummy")
  console.log(users)
  users.unshift(mobileNumber)
  console.log(users)
}
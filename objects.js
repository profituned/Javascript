const mySym = Symbol("key1")


const jsUser =  {
    name: "Hitesh", 
    "full name": "Hitesh Choudhary",
   [mySym] : "Symbol",
    age: 18, 
    location: "Jaipur", 
    email: "hassan@gmail.com",
    isLoggedIn: ["Monday", "Saturday"]
}





// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])
// console.log( typeof jsUser.isLoggedIn)
// console.log(jsUser[mySym])

// Object.freeze(jsUser)

jsUser.email = "hassan@gmail.com"

jsUser.greeting = function() {
    console.log("Hello JS User")
}
jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())








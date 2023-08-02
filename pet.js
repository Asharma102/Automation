const person = require("./person");

class pet extends person {

    // get location(){
    //     return "BlueCross"
    // }

    constructor (firstName, lastName){

        super(firstName, lastName)
    }
}

let Pet = new pet("first-Name", "last-Name")
Pet.fullName();
console.log(Pet.location)
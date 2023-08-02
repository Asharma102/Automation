module.exports = class person {

    age = 24

    get location(){
        return "canada"
    }

    constructor(firstName, lastName){

        this.firstName = firstName
        this.lastName = lastName
}
 fullName(){
    console.log(this.firstName+this.lastName)

 }

}

// let object = new person("timy", "toe")
// console.log(object.location)
// console.log(object.age)
// console.log(object.fullName())
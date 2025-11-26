
var obj = new Object();

var obj = {};

//----------------- 1-------------------
//add new property
obj.name = "Olga";
console.log(`Name : ${obj.name}`);

obj.name = "Nazar";
console.log(`Name : ${obj.name}`);

obj.age = 15;
obj.address = "Rivne";
console.log(`address : ${obj.address}`);
console.log(`Info  : ${obj.name}, ${obj.age}, ${obj.address}`);
//delete property
delete obj.address
console.log(`address : ${obj.address}`);
console.log(`Info  : ${obj.name}, ${obj.age}, ${obj.address}`);

//---------------------------- 2-------------------
var product = {
    name: "Samsung Galaxy S22 Ultra",
    price: 23000,
    memory: 256,
    aplications: ["Facebook", "Discord", "Safari", "Opera"],
    owner:
    {
        name: "Vitia",
        surname: "Oliunuk"
    }
}

console.log(`Fullname owner : ${product.owner.name} ${product.owner.surname}`)


//------------------------ 3 ------------------------
var product = {};
product["name"] = "Ball";
product["size"] = 30;
product["price"] = 880;
product["type"] = "sport equipment";

product["name"] = "FootBall";//overwrite

console.log("Name: " + product['name']);
console.log("Size: " + product['size']);
console.log("Type: " + product['type']);
console.log("Color: " + product['color']);

// ---------------4- - property access using object.key
var student = {};
student.name = "Vova";
student.age = 30;

student['Average Mark'] = 7.8; // allows white-space characters
student.averageMark = 8.8;

console.log("Average Mark: " + student['Average Mark']);
console.log("averageMark: " + student.averageMark);

// delete property of object
delete student.averageMark;

student.address = "Soborna 45b";

// if ('address' in student) {
//     alert(student.address);
// }
// else {
//     alert("Student has not an address!");
// }

//view all properties
for (var property_key in student) {
    console.log(property_key + " - " + student[property_key]);
}

var car = {
    mark: "Nissan",
    model: "Note",
    year: 2000,
    color: "Grey",
    owner:
    {
        name: "Vitia",
        surname: "Oliunuk"
    }
}
for (var property_key in car) {

    if (property_key == "owner") {
        for (var key in car[property_key]) {
            console.log(key + " - " + car[property_key][key]);
        } 
    }
    else
    {
        console.log(property_key + " - " + car[property_key]);

    }
}

// let res = "\t Car info : \n";
// for (const property in car) {
//     res += property + " : " + car[property] + "\n";   
// }
// alert(res);

// inner objects
let person = {
    firstName: "Bob",
    lastName: "Bobovich",
    birthdate: 2010,
    address: {
        street: "Soborna",
        city: "Rivne",
        building: "5a"
    },
    cars: ["Nissan Primera", "Ford Focus", "Toyota Avensise"]
};
console.log(`Address: ${person.address.street} ${person.address.building}, ${person.address.city}`);

// function with object
function addCarToPerson(person, newCar) {
    person.cars.push(newCar);
}


function showAllCars(person) {
    alert("Cars: " + person.cars);
}
//let car_name = prompt("Enter mark car : ")
//addCarToPerson(person, car_name);
//showAllCars(person);

// object with methods
const player = {
    login: "super_user123",
    password: "Qwerty",
    email: "bablafra@gmail.com",
    score: 0,
    print : function(){
         console.log(`User: ${this.login} with score: ${this.score}`);
    },
    increaseScore(value)
    {
        if(value > 0)     
            this.score +=value;
        else
            console.error("Error value");
    }
}

player.print();
player.increaseScore(5);
player.print();
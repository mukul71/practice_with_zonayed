var rahim = {
    name: "Abdur Rahim",
    Age: 21,
    address: "Dhaka", 
    profession: "Job"
}

console.log(rahim);
console.log(rahim.Age);//dot notation
console.log(rahim.profession);
console.log(rahim['address']);//braket notation and 
                              //object property must a 
                              //string insdie the bracket.
rahim.zipcode= 1222;
rahim.policeStation = "Kafrul";

console.log(rahim.zipcode)//dot notation
console.log(rahim['policeStation']);

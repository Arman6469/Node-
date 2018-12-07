var fs = require('fs');

var obj = { name: "Arman", secon_dname: "Umroyan", age: "15", tumo_student: true }
// var obj = {
//     "first_name": "Arman",
//     "second_name": "Umroyan",
//     "age": 15,
//     "tumo_student": true
// }

var myJSON = JSON.stringify(obj);




function main() {
   

    fs.writeFileSync("obj.json", myJSON);
    console.log("Areci prca")
}

main()
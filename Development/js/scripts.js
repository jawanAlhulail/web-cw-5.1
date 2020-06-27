// السؤال الأول
// 1
const name="جوان";
// 2
let age=15;


// 3 and 4
console.log( "انا " + name + " " + "وعمري" + age)
// 5 and 6
let five_times_age = 5*age;
console.log(five_times_age)

console.log(5*age);

age *= 5;
console.log(age);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobbies = [ "سباحه","رسم","طبخ"];

// 2
hobbies.push("15");

hobbies[4] = 15
console.log(hobbies)
console.log(hobbies.length)
// 3
hobbies.pop();
console.log(hobbies);
// 4
let student = {
    track:"ويب",
    language:"CSS",
}
// 5
student["TAs"] = ["نانسي", "موضي" ,"رهف" , "حسين"] 
console.log(student)


console.log(student["track"])

// 6
console.log(student.track)
// 7
console.log(student["TAs"][0])
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
student["sayhello"] = function() {console.log("جوان")}
student["age"] = function(age) {
    age*= 5;
    console.log(age)
}
// 2
student["sayhello"]()
student["age"]()
// console results => console.png

const names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];

const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

const names3 = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];

// Level 0
console.log("Level 0 : Display every single name");

const printNames = names.map(names => console.log(names));

// Level 1
console.log("Level 1 : Display every with Mr. ");

const printMr = names.filter(names => names.includes("Mr."));

console.log(printMr);

// Level 2
console.log("Level 2 : Display names with gender");
names.forEach(function (gender) {
    let text = ""
    let i = 1;
    if (gender.includes("Mr.")){
        text += i+ gender + "(Male)";
    } else{
        text += i+ gender + "(Female)";
    }

    i++;

    console.log(text);
});

/*
// Level 3
const search_name = names.filter((names, name) => names.includes(name))

console.log(search_name);
*/

// Level 4
console.log("Level 4 : Merger 2 Array");

console.log(names1.concat(names2));

/*
// Level 5
console.log("Modify Name");
*/
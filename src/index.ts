const name = "SangIl",
    age = 24,
    gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`Hi, I'm ${name}, ${age}, and ${gender}`);
};

sayHi(name, age);

// gender is optional.. 

const sayHiWithType = (name:string, age: number, gender:string): string => {
    return `Hi, I'm ${name}, ${age}, and ${gender}`;
}

// sayHiWithType("Sangil", "23", "male"); // error on "23" for not number
console.log(sayHiWithType("Sangil", 25, "male"));   
export {};
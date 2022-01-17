const name = "SangIl",
    age = 24,
    gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`Hi, I'm ${name}, ${age}, and ${gender}`);
};

sayHi(name, age);

// gender is optional.. 

export {};
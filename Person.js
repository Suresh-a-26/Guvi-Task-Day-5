class Person{
    constructor(fullName,age,currentLocation,nativeLocation,email,phoneNumber,education,currentCompany,skillSets,languagesKnown){
        this.fullName=fullName;
        this.age=age;
        this.currentLocation=currentLocation;
        this.nativeLocation=nativeLocation;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.education=education;
        this.currentCompany=currentCompany;
        this.skillSets=skillSets;
        this.languagesKnown=languagesKnown;

    }
}

const suresh = new Person(
    "Suresh Ayyanar",
    24,
    "Chennai",
    "Tuticorin",
    "sureshayyanar2326@gmail.com",
    7868845326,
    {name:"saveetha engineering college",place:"Chennai" },
    {name:"Infosys",place:"chennai",YOE:"2.6years"},
    ["HTML","CSS","JS"],
    ["English","Tamil"]
);
console.log(suresh);
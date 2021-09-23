type MyObject = {
  name?: string;
  age: number;
  getFamilyName: () => string;
  getLastName: () => string;
  getBloodType: () => string;
};

const obj: MyObject = {
  name: "Min Tae",
  age: 40,
  getFamilyName: function () {
    return "Kim";
  },
  getLastName: () => "Kim",
  getBloodType() {
    return "B";
  },
};

obj.name;
obj.age;
// obj.bloodType = "A";
// delete obj.bloodType;
delete obj.name;
obj.getFamilyName();
obj.getBloodType();

obj.age = 200;
obj.age = -500;

class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  set bloodType(bType: string) {
    if (bType === "A" || bType === "B" || bType === "O" || bType === "AB") {
      this._bloodType = bType;
    }
  }

  get bloodType() {
    return `${this._bloodType} 형`;
  }
}

const p1 = new Person("B");

p1.bloodType;
p1.bloodType = "C";

/*
const myObj = {
  name: "Kim",
};
*/

// delete myObj.name;

const myObj = Object.create(null, {
  name: {
    value: "Kim mintae",
    writable: false,
    configurable: true,
  },
});

myObj.name;
// myObj.name = "하하하";
// delete myObj.name;

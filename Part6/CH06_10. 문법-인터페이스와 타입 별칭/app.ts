import * as allTypes from "./type";

const foo: allTypes.FooFunction = function () {
  return "아무 쓸모없는 함수";
};

const iUser: allTypes.IUser = {
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
};

const iUserProfile: allTypes.TuserProfile = {
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
  profileImage: "https://...",
  github: "okay",
};

const iStyle: allTypes.IOnlyNumberValueObject = {
  borderWidth: 5,
  width: 300,
  height: 100,
};

const tStyle: allTypes.TOnlyBooleanValueObject = {
  border: true,
  visible: false,
  display: true,
};

const getApi: allTypes.IGetApi = (url, search = "") => {
  return new Promise((resolve) => resolve("OK"));
};

getApi("/api/users").then((data) => console.log(data));

class Rect implements allTypes.IRect {
  // private id : number;
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.id = Math.random() * 100000;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

function createDefaultRect(cstor: allTypes.IRectConstructor) {
  return new cstor(0, 0, 100, 100);
}

const rect1 = new Rect(0, 0, 100, 200);
const rect2 = createDefaultRect(Rect);

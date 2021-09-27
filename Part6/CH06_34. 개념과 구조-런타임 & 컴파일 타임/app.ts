function add(x: number, y: number): number {
  return x + y;
}

type ObjType = {
  x: number;
  y: number;
};

const json = `{ "x": 10, "y": 20}`;
// const json = `{ "x": abc, "y": 20}`;
const obj: ObjType = JSON.parse(json) as ObjType;

add(10, 20);
// add(10, `abc`);

add(obj.x, obj.y);

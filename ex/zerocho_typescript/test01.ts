function add(x: number, y: number) {
  return x * y;
}

console.log(add(1, 2));

function add2() {
  return 1;
}

const head = document.querySelector("#header");

if (head) {
  head.innerHTML = "hello world";
  console.log(head);
}

type World = {
  name?: string;
};

const a: World = {
  name: "1111",
};

const enum Dir {
  up = 1,
  down = "2",
  left = 3,
  right = "4",
}

// readonly
const Dir2: { up: 1; down: "2"; left: 3; right: "4" } = {
  up: 1,
  down: "2",
  left: 3,
  right: "4",
};

//as
const Dir3 = {
  up: 1,
  down: "2",
  left: 3,
  right: "4",
} as const;

type Direction = typeof Dir[keyof typeof Dir];
function run(dir: Direction);

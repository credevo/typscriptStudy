/** 인터페이스, type */
// type A = { a: string };
// const aa: A = { a: "hello" };

//객체 지향을 위한 것일경우는 interface를 활용하여
//상속(확장)으로 활용 가능하다.
// interface B {
//   a: string;
// }
// const b: B = { a: "hi" };

// function add(x: string | number, y: string | number): string | number {
//   return x + y;
// }
// const result: string | number = add(1, 2);

// type AA = { hello: "world" } & { hi: "hi" };


interface A {
  name : '1'
}

interface B  extends A{
  name1 : '2'
}

interface C extends B{
 name2 :'3',
 age : 10;
}
interface D extends C{
  height : 167
}

type e = D;
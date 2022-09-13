// interface Human {
//     talk : ()=> void;
// }

// const people : Human = {
//     talk(){return 1004}
// } 

// function aa(callback :()=>void) : void {
//     return callback();
//     // return 1;  함수의 리턴값이 void 즉 없어야 한다는 의미
// }

// aa(()=>{
//     return 3;
// });
declare function forEach(arr:number[], callback:(el:number)=>undefined) : void;
declare let aaa: number;

aaa = 1;

let target : number[] = [];
forEach([1,2,3], el=>target.push(el))
forEach([1,2,3], el=>{target.push(el)})
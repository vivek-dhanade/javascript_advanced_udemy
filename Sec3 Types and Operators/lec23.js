var a = 2, b = 3, c = 4;

a = b = c;

// here first precedence is checked -- same for all operators (all are =)
// next associativity is checked -- right to left
// this first b = c , then a = b

console.log(a); //4
console.log(b); //4
console.log(c); //4 


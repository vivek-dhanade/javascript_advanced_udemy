console.log(3 < 2 < 1);

// first precedence -- same operators, so same precedence
// next associativity -- right to left
// 3 < 2  --> returns false
// next -->  false < 1
// false is converted(coersed) to number value -- i.e. zero
// thus 0 < 1
// returns true


// summary -- 3<2<1 -- false<1  -- 0<1 -- true  -- Thus answer true




// Operators

// == and ===

// == is checking equality by converting(coerse) either of LHS/RHS to get them to be of same type

// === checks equality of same data type and equality after that. No coersing.

var a=0;
var b=false;

if( a==b)
    console.log("They are equal");
else
    console.log("They are not equal");


    
if(a===b)
    console.log("They are strictly equal");
else
    console.log("They are not strictly equal");


// Similar for strict non-equality use !== , for avoiding data coersing instead of !=
const I = 1
const V = 5
const X =10 
valueArr = ["I"=1, "V"=5, "X"=10, "L" = 50, "C"=100, "D"=500, "M"=1000];

function romanLet(letter) {
  if (letterI === ("I")); {
  if (leterV === ("V")); {
  if (letterX === ("X"));{

  }
  }
  }
}
const roman = "I"
roman.replace(/I*/g, "1")





function oneToThree(number) {
  let oneArr = [];
  let sumArr = [0]
  
  while (sumArr <= number) {
    oneArr.push(1);
  }
  sumArr = oneArr.reduce(function(a,b) {
    return a+b;
  });
  
  console.log(oneArr)

}





// If userNumInt <= 3 run the function "threeChar"//
function threeChar(number) {
 if (number === 1) {
   console.log("I");
 }
 else if (number === 2) {
   console.log("II");
 }

 else if (number === 3) {
   console.log("III");
 }
}

// If  10 > userNumInt > 3 //
function subChar(number) {
  if (number === 4) {
    console.log("IV");
  }
  else if (number === 5) {
    console.log("V");
  }

  else if (number === 6) {
    console.log("VI");
  }

  
}
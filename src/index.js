module.exports = function solveEquation(equation) {
  var a, b, c;    
  var arr = [];
  equation = equation.replace(/ /g, "");
  
  a = parseInt(equation);
  b = parseInt(equation.substring(equation.indexOf('x^2')+3));
  c = parseInt(equation.substring( equation.lastIndexOf('*x')+2));

  const D = Math.pow(b,2) - 4*a*c; 

  arr[0] = Math.round((-b+Math.sqrt(D) ) / (2*a));
  arr[1] = Math.round((-b-Math.sqrt(D) ) / (2*a));
  
  arr.sort(function (a, b) {
      return a - b;      
  });
  return arr;
}

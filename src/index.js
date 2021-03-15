module.exports = function check(str, brackets) {

  var obj = {};
  var arr = [];
  
  for(var j = 0; j < brackets.length; j += 1) {
    obj[brackets[j][0]] = brackets[j][1];
  }

  arr.push(str.charAt(0));

  for(var i = 1; i < str.length; i += 1) {
    if(str.charAt(i) === obj[arr[arr.length - 1]]) {
      arr.pop();
    } else {
      arr.push(str.charAt(i)); 
    }
  }

  if (arr.length > 0) { 
    return false;
  }
  return true;
};
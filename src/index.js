module.exports = function check(str, bracketsConfig) {
  let res = [];
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]]++;

    for (let brackets of bracketsConfig) {
      if ( brackets.indexOf(str[i]) == 0 ) {
        if ( brackets[0] == brackets[1] ) {
          if ( obj[str[i]] % 2 == 0 ) {
            break;
          }
        }        
        res.splice(i, 0, str[i], brackets[1]);
        break;
      }
    }
  }  
  return str == res.join('');
}

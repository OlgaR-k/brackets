module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let res = [];
  let addElem;
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let brackets of bracketsConfig ) {
      if ( brackets.indexOf(arr[i]) == 0 ) {
        res.splice(i, 0, arr[i], brackets[1]);
        break;
      }
    }
 }
  return arr.join() == res.join();
}

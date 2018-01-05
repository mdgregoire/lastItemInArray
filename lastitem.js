var fruits = ['apple', 'orange', 'banana'];
function lastItem( lastItemArray ) {
  var arrayLength = lastItemArray.length; //finding the length of the array
  return lastItemArray [arrayLength -1]; //converting length to index value
}
console.log ('The last item in the array is', lastItem(fruits));

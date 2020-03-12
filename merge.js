function merge(arry1, arry2) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while( i < arry1.length || j < arry2.length ){
    if (arry1[i] <= arry2[j] || arry2[j] === undefined){
      result.push(arry1[i]);
      i++;
    }
    else {
      result.push(arry2[j]);
      j++;
    }
      
  }

  return result;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([], [ 1, 2, 6 ]), "=?", [ 1, 2, 6 ]);
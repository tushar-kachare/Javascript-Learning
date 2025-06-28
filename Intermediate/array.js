let arr = [1,2,3,4,5]
arr.push([7,8,9])
arr.shift() // --> POP FIRST ELEMENT
// console.log(arr);
arr.unshift(1) // --> PUSH ELEMENT TO FIRST POSITION

// console.log(arr);
console.log(arr.toLocaleString()); // --> converts array to string

// SPLICE VS SLICE
// slice(left_index,right_index)
// splice(left_index,total_number)
// SLICE -> JUST GIVE COPY OF SUBARRAY ORIGINAL ARRAY REMAINES SAME [l,r)
// SPLICE -> RETURNS DELETED ELEMENTS ORIGINAL ARRAY MODIFIED [l,r) **** here r is number of elements to be deleted
// splice can be used to insert element at specific index

// console.log(arr.splice(2,4));
// console.log(arr);

// inserting element 
console.log(arr.splice(2,0,[10,11])); // at index 2 [10,11] will be added
console.log(arr);
console.log(arr.length);








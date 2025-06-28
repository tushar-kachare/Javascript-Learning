// Stack -> Return Copy (Primitive Data types)
// Heap -> Return Reference (Non-Primitive Data types)


// Primitive -> (Stack Memory)
// always COPY return 
// eg
let user1 = 'tushar'
let user2 = 'ganesh'
user2 = 'kachare'
console.table([user1,user2]);
// [tushar,kachare]
// As Copy is created by user2


// Non-Primitive -> (Heap Memroy)
// Always Return Reference
// eg]
let info1 = {
    userid : '10',
    email : 'kach@gmail.com'
}
let info2 = info1

info2['userid'] = 20
console.table([info1,info2]);
// Same value for info1 and info2



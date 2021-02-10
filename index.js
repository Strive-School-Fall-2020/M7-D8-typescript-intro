// tsc -w index.ts
console.log('hello typescript!');
console.log('hello2');
var i = 10;
console.log(i);
// i = 'a'
var x;
var y;
// let array: Array<string>
var array;
array = ['stefano', 'riccardo'];
var addition = function (n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        console.log('you inputted strings');
    }
};
// type InventoryObj = {
//     shape: string,
//     color: string,
//     size: ValidType
// }
var obj = {
    shape: 'round',
    color: 'green',
    itemId: 1
};
// interface is like type, but it's just fo objects and can be extended
obj.size = 'large';
console.log(addition(2, 3));
// StriveStaff[]
// Array<StriveStaff>
var striveTutors = [
    {
        name: 'Stefano',
        age: 33,
        role: 'Teacher'
    },
    {
        name: 'Riccardo',
        age: 35,
        role: 'Teacher'
    },
    {
        name: 'Stefano M',
        age: 31,
        role: 'Teacher'
    },
    {
        name: 'Diego',
        role: 'Master of Strive'
    }
];
console.log(striveTutors[1].age);

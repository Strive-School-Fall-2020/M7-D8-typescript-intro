// tsc -w index.ts
console.log('hello typescript!')
console.log('hello2')

let i:number = 10

console.log(i)
// i = 'a'

let x: string
let y: boolean

// let array: Array<string>
let array: string[]

array = ['stefano', 'riccardo']

// const addition = (n1, n2) => {
    // if (typeof n1 === 'number' && typeof n2 === 'number') {
    //     return n1 + n2
    // } else {
    //     // warn the user that n1 and n2 are not numbers
    // }
// }

// const addition = (n1: number, n2: number) => {
//     return n1 + n2
// }

type ValidType = number | string

const addition = (n1: ValidType, n2: ValidType) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        console.log('you inputted strings')
    }
}

interface InventoryObj {
    shape: string,
    color: string,
    size?: ValidType
}

interface newInventoryObject extends InventoryObj {
    itemId: number
}

// type InventoryObj = {
//     shape: string,
//     color: string,
//     size: ValidType
// }

const obj: newInventoryObject = {
    shape: 'round',
    color: 'green',
    itemId: 1
}

// interface is like type, but it's just fo objects and can be extended

obj.size = 'large'



console.log(addition(2, 3))


interface StriveStaff {
    name: string,
    age?: number,
    role: string
}

// StriveStaff[]
// Array<StriveStaff>

let striveTutors: StriveStaff[] = [
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
]

console.log(striveTutors[1].age)
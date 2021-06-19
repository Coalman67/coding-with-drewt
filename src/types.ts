export enum Severity {
    Low = 'green',
    Medium = 'yellow',
    High = 'orange',
    Extreme = 'red'
}

export interface Todo {
    /** The title of the TODO item. */
    title: string
    /** The importance of the TODO item. */
    severity?: Severity
    /** Specifics of a TODO. */
    description?: string
    /** Whether the TODO item is marked as completed. */
    isCompleted?: boolean
}



// property: type
// string, boolean, number

interface Cat {
    name: string
    age: number
    breed: string
    weight: string
    length: string
    preferredFood: string
    napSpot: string
    gender: string
}

const cats: Cat[] = [
    {
        name: 'Jer',
        age: 6,
        breed: 'Domestic longhair',
        weight: '8 pounds',
        length: '18 inches',
        preferredFood: 'Tuna pate',
        napSpot: 'Pillow',
        gender: 'male'
    },
    {
        name: 'Clem',
        age: 3,
        breed: 'Domestic shorthair',
        weight: '7 pounds',
        length: '13 inches',
        preferredFood: 'peanut butter',
        napSpot: 'cozy places',
        gender: 'female'
    }
]

export interface Animal {
    genus: string
}

export interface Dog extends Animal {
    breed: string
}

export interface Turtle extends Animal {
    shellThickness: number
}


const animal: Animal = {
    genus: 'idk something'
}

const violet: Dog = {
    genus: 'canus',
    breed: 'something we do not know'
}

const speedy: Turtle = {
    shellThickness: 2.3,
    genus: "sucks to suck slowpoke"
}

const todo: Todo = {
    title: 'Pet Jer',
    severity: Severity.Extreme
}

// <Todo title="Pet Jer" severity={Severity.Extreme} />






// const string: string = 'hello'
// const number: number = 256
// const boolean: boolean = true
// const array: string[] = []
// const object: object = {}


// interface Shoe {
//     color: 'black' | 'white' | '...'
//     brand: 'nike' | 'addidas' | '...',
//     cost: number
//     haveLaces: boolean
//     modelYear: Date
// }    

// const shoe: Shoe = {
//     brand: 'nike',
//     cost: 52,
//     helloKitty: false
// }
// const myShoe = {
//     band: 'addidas',
//     cost: 'nothing',
//     helloKitten: true
// }

const randomThing: object = {}
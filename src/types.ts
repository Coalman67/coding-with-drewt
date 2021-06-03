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
}

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
/**
 * Logs any issues to the system, so we can keep track of it.
 * @see [important website](https://google.com) for more information.
 * 
 * log('hello')
 */
export function log(message: string) {
    const yelling = message.toUpperCase()
    console.log(message, yelling)
}


function washHands(): void {
    // do step 1
    // turning water on...

    // do step 2
    // ...

    // do step 3

    // do step 5

    // do step 6

    // do step 7
}


const myFavoriteNumber = 2

const myNewFavoriteNumber = 26 + myFavoriteNumber

/**
 * Adds two numbers and returns the result.
 */
export function sum(x: number, y: number): number {
    const result = x + y

    washHands()
    return result
}

export function subtract(x: number, y: number): number {
    washHands()

    return x - y
}

const sumThing = sum(2, 1)

// log(subtract(2, 1))

/**
 * Returns whether a provided list of strings includes the word `Gianni` within it.
 */
export function hasGianni(names: string[]): boolean {
    // whatever I do behind the door
    // queue magic 🪄✨
    const gianniIsHere: boolean = names.includes('gianni')

    return gianniIsHere
}


const georgesListOfNames = ['bob', 'bobby']
const georgesListHasGianni = hasGianni(georgesListOfNames)
// log(georgesListHasGianni)

const joesListOfNames = ['gianni', 'gianni', 'paul']
const joesListHasGianni = hasGianni(joesListOfNames)
// log(joesListHasGianni)

function isPlaceAWinner(place: number): boolean {
    return place === 2 || place === 1
}

export function lotteryTicket(place: number): boolean {
    const hasWon = isPlaceAWinner(place)
    return hasWon
}

lotteryTicket(2)
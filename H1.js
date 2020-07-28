/**
 * 1.a
 *
 * @param x
 * @param y
 * @param z
 * @returns {string}
 */
let productSign = function (x, y, z) {
    if ((x * y * z) < 0) {
        return "MINUS";
    } else {
        return "PLUS";
    }
}
console.log(productSign(5, -2, 3));


/**
 * 1.b
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 * @returns {string}
 */
let secretBox = function (a, b, c, d, e) {
    if (a !== 10 && b !== 200 && c !== 3000 && d !== 40000 && e !== 5000000) {
        return "A truckload of bunnies";
    } else {
        return "Gotcha!";
    }
}
console.log(secretBox(10));


/**
 * 2.a
 * @param n
 * @returns {number}
 */
let numberSum = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(numberSum(5));


/**
 * 2.b
 * @param a
 */
let randomNum = function (a) {
    while (a < 10000) {
        a = Math.round(a * (Math.random() * 10));
        if (a > 10000) {
            break;
        }
        console.log(a);
    }
}
console.log(randomNum(7));


/**
 * 3.a
 * @param m
 * @param n
 * @returns {any[]}
 */
let numbers = function (m, n) {
    let oana = Array(m + n.length);
    for (let i = 0; i < m; i++) {
        oana[i] = i + 1;
    }
    let z = 0;
    for (let j = m; j < m + n.length; j++) {
        oana[j] = n[z];
        z++;
    }
    return oana;
}

console.log(numbers(50, [89, 99, 120, 412, 124]));

/**
 * 3.b
 * @param m
 * @param n
 * @returns {any[]}
 */
let numberOut = function (m, n) {
    let oana = Array(m + n.length);
    for (let i = 0; i < m; i++) {
        oana[i] = i + 1;
    }
    let z = 0;
    for (let j = m; j < m + n.length; j++) {
        oana[j] = n[z];
        z++;
    }
    oana.pop();
    return oana;
}

console.log(numberOut(50, [89, 99, 120, 412, 124]));


/**
 * 4.a
 * @type {{printIntroduction: person.printIntroduction}}
 */
const person = {
    printIntroduction: function () {
        console.log(`My first name is ${this.firstName}. My last name is ${this.lastName}. My age is ${this.age}.`);
    }
};
const me = Object.create(person);
me.firstName = "Oana";
me.lastName = "Petcu";
me.age = 25;

me.printIntroduction();


/**
 * 5.b
 */
let numbersOut = function () {
    let newArray = numberOut(50, [89, 99, 120, 412, 124])

    for (let q = 0; q < newArray.length; q++) {
        if (newArray[q] % 3 !== 0) {
            console.log(newArray[q]);
        }
    }
}

numbersOut();


/**
 * 6.a
 */
class Human {
    #fullName = "Oana Petcu";

    humanOana() {
        return this.#fullName;
    }

}

const laptop = new Human();

console.log(laptop.humanOana());












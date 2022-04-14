
// 2.Create a function that will return the area of a rectangle, square, triangle

const ariaCalculation = (type, value_1, value_2) => {
    let shape = '';
    let aria = '';

    switch(type){
        case 'r' :
            shape = 'Ractangle'
            aria = (value_1 * value_2)
            break;
        case 's' :
            shape = 'Square'
            aria = (value_1 * value_1)
            break;
        case 't' :
            shape = 'Triangle'
            aria = (0.5 * value_1 * value_2)
            break;
    }

    console.log(`The aria of ${shape} is ${aria}`);
}



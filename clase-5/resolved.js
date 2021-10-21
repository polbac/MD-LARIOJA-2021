const countBits = (int) => {
    let counter = 0
    let positiveNumber = null;

    if (int < 0) {
        positiveNumber = int * -1
    } else {
        positiveNumber = int
    }
    let arrayToCompare = positiveNumber.toString(2).split("")

    for (let i = 0; i < arrayToCompare.length; i++) {
        if (arrayToCompare[i] == 1) {
            counter++
        }
    }
    /*     for (element of arrayToCompare) {
            if (element == 1) counter++
        } */
    /* arrayToCompare.forEach(element => {
        if (element == 1) counter++
    }) */
    return counter
};

console.log(countBits(1234))
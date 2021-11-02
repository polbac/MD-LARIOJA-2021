
for (let i = 0; i <= 100; i++) {
    
}

for (let i = 100; i > 0; i--) {
    //console.log(i)
}

const array = [0,1,2,872190,4,32,123,5]

/* for(let i=0; i < array.length; i++) {
    console.log(array[i])
} */

// inverso
/* for(let i = array.length - 1; i >= 0 ; i--) {
    console.log(array[i])
} */


array.forEach(function(item, index) {
    console.log(index, item)
})

// for of (array)
/* for (const element of array) {
    console.log(element)
} */

// for in (object)
const product1 = {
    name: 'T-shirt red',
    categories: ['t-shirt', 'colors'],
    sizes: ['lg','sm'],
    price: 99
}

for (const key in product1) {
    /* console.log(key, product1[key]) */
}

let counter = 200

while(counter < 100) {
    //
    console.log(counter)
    counter++
}

// crear un array

const myArray1 = [1,2,3,4,5]
const myArray2 = [1,'Hola',3,'Chau',5]
const myArray3 = new Array()
const myArray4 = [1,2,3,'Hola','Chau',[1,['a','b','c'],3,4],{name:'Jhon'}]

const pos5 = myArray4[5]
const pos1 = pos5[1]

/* console.log(myArray2[1]) */

// pisar un valor
myArray2[1] = 'Como estas?'

//console.log(`${myArray2[1]} ${myArray2[3]}`)


const product1 = {
    name: 'T-shirt red',
    categories: ['t-shirt', 'colors'],
    sizes: ['lg','sm'],
    price: 99
}

/* console.log(`El producto ${product1.name} tiene ${product1.categories.length} categorías`)
console.log(Object.keys(product1).length) */
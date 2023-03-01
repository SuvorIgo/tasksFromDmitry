import { setPrototype } from "./setPrototype";

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    
}

setPrototype();

function filter(arr, str) {
    let strArray = str.split('&');

    let props = strArray.map(item => ({
        ops: item.split(/(-|>=?|<=?|=)/).filter((n) => n && /[^-]/.test(n))
    }));

    let resultArray = arr.filter(value => {
        for(let prop of props) {
            if (!value[prop.ops[0]][prop.ops[1]](prop.ops[2]))
                return false;
        }

        return true;
    })

    return resultArray;
}

let product1 = new Product('Арбуз', 300, 2, 'Очень сладкий арбуз');
let product2 = new Product('Молоко', 60, 34, 'vds abc');
let product3 = new Product("Hofd", 900, 2, 'vddd abc');

let arrProduct = [product1, product2, product3];

let arr = filter(arrProduct, "name-contains-fd&price-=2&quantity->5&description-ends-abc");
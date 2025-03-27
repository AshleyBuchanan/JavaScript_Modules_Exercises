import { addItem, removeItem, listItems } from './inventory.mjs';

//should add a single entry of 1 pencil with the price of $0.00
console.log(
    addItem('pencil')
);

//should add a single entry of 50 erasers with the price of $2.00
console.log(
    addItem('eraser', 2.00, 50)
);

//should list the two entries accordingly
console.log(
    listItems()
);

//should remove 1 eraser but the entry remains
console.log(
    removeItem('eraser')
);

//should list the 2 entries, showing 1 less eraser
console.log(
    listItems()
);

//should add a single entry of 1 paper with the price of $0.10
console.log(
    addItem('paper', 0.10)
);

//should list the 3 entries accordingly
console.log(
    listItems()
);

//should remove 1 paper thus removing the entry
console.log(
    removeItem('paper')
);

//should list the two entries accordingly - the paper is removed
console.log(
    listItems()
);

//should identify that there is no pepper in the list
console.log(
    removeItem('pepper')
);

//should identify that there is already a pencil on the list
console.log(
    addItem('pencil')
);


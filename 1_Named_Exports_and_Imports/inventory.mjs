class Item {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
}

const listOfItems = [];

const addItem = function (item_name, price = 0.00, count = 1) {

    //check to see if item already exists
    const exists = listOfItems.find(item => item.name.toLowerCase() === item_name.toLowerCase());

    //if exists bypass, otherwise add to the list
    if (!exists) {
        const item = new Item(item_name, price, count);
        listOfItems.push(item);
        return `addItem:\n | ${item.name}\n | $${item.price.toFixed(2)}\n | ${item.count} each\n`;
    } else {
        return `addItem:\n | ${item_name} is already in the list.\n | remove it to adjust values.\n`
    }
}

const removeItem = function (item_name) {
    //find the item to be removed
    const item = listOfItems.find(result => result.name.toLowerCase() === item_name.toLowerCase());

    //if found decrement count
    if (item) {
        item.count--;

        //if count <= 0 remove from the list, otherwise show the new count
        if (item.count <= 0) {
            listOfItems.splice(listOfItems.indexOf(item), 1);
            return `removeItem:\n | ${item.name}\n | $${item.price.toFixed(2)}\n | No more left... removed\n`;
        } else {
            return `removeItem:\n | ${item.name}\n | $${item.price.toFixed(2)}\n | ${item.count} each\n`;
        }
    } else {
        return `removeItem:\n | ${item_name} isn't in the list.\n`;
    }
}

const listItems = function () {
    //build a string representing the list and return it
    let string = `listItems: [\n`;

    listOfItems.forEach(item => {
        string += ` | name: ${item.name}, price: $${item.price.toFixed(2)}, count: ${item.count}\n`;
    });

    string += `]\n`;

    return string;
}

export { addItem, removeItem, listItems };

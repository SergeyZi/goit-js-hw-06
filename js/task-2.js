class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
    }

     getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    let newItems = []; 
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i] !== itemToRemove) { 
        newItems.push(this.#items[i]); 
      }
    }
    this.#items = newItems; 
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

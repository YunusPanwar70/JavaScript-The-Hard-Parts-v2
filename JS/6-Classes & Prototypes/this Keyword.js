const obj = {
    name: 'John',
    greet: () => {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet();

const obj2 = {
    name: 'John',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
obj2.greet();
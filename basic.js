//課題１

let str1 = 'abc';
let str2 = 'defgh';
let num1 = 300;
let num2 = 3.14;
let flg = true;

console.log(str1);
console.log(str2);
console.log(num1);
console.log(num2);
console.log(flg);

//課題２

let numbers = [1, 4, 7, 9];
let members = ['太郎', '二郎', '花子'];

numbers.push(20);
console.log(numbers.length);
console.log(members[2]);

//課題３

let obj = {
    name: null,
    setName: function (name) {
        this.name = name;
    },
    showName: function () {
        return this.name;
    }
}
obj.setName('花子');
console.log(obj.showName());

//1
let result = document.getElementById("result");
console.log(result);

//2
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);

//3
/*
let h1 = document.querySelector("h1");
h1.textContent = "h1が変更されました";
*/

//模範回答
document.getElementsByTagName("h1")[0].textContent = "h1が変更されました！！";

//4
/*
let main = document.getElementsByClassName("main");
for (let div of main) {
    div.style["background-color"] = "lightgreen";
    div.style.width = "300px";
    div.style["text-align"] = "center";
}
*/
//模範回答
let main = document.getElementsByClassName("main")[0];
main.style["background-color"] = "lightgreen";
main.style["width"] = "300px";
main.style["text-align"] = "center";

//5
/*
for (let p of paragraph) {
    p.style["color"] = "gray";
    p.style["font-size"] = "24px";
    p.style["padding"] = "10px";
}
*/
//模範回答
for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style["color"] = "gray";
    paragraph[i].style["font-size"] = "24px";
    paragraph[i].style["padding"] = "10px";
}

//6
//let result = document.getElementById("result");
let p = document.createElement("p");
p.textContent = "resultに追加しました。";
result.appendChild(p);

//7
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let table = document.createElement("table");
table.appendChild(thead);
table.appendChild(tbody);
result.appendChild(table);

//8
let columns = ["名前", "出身地"];
let tr_h = document.createElement("tr");
columns.forEach(column => {
    let th = document.createElement("th");
    th.textContent = column;
    tr_h.append(th);
});
thead.append(tr_h)
let persons = [
    ["タロウ", "東京"],
    ["ハナコ", "千葉"],
    ["サトシ", "神奈川"]
];
persons.forEach(person => {
    let tr_b = document.createElement("tr");
    person.forEach(info => {
        let td = document.createElement("td");
        td.textContent = info;
        tr_b.appendChild(td);
    });
    tbody.appendChild(tr_b);
});

//9
document.getElementById("remove").remove();

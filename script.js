let savollar = [
    {
        savol: "5x5",
        javoblar: ["a)12", "b)15", "c)25"],
        javob: ["c", "C"]
    },
    {
        savol: "3x5",
        javoblar: ["a)12", "b)15", "c)25"],
        javob: ["b", "B"]
    },
    {
        savol: "4x3",
        javoblar: ["a)12", "b)15", "c)25"],
        javob: ["a", "A"]
    },
    {
        savol: "",
        javoblar: ["", "", ""],
        javob: ["", ""]
    }
]
let count = 0;
sora(); 

function sora() {
    let sorov = prompt(`TESTNI BOSHLASH UCHUN 1 NI BOSING\nTestga qo'shimcha kiritish uchun 2 ni bosing`)
    if (sorov == "1" && count == 0) { boshlash(); }
    if (sorov == "2") { add(); }
    if (sorov == "1" && count != 0) { afterAdd(); }
    // if(!(sorov=="1" && sorov=="2")&& again!=false){sora();}
}
function boshlash() {
    let y = Object.keys(savollar).length;
    let sum = 0;
    let s = new Date();
    for (i = 0; i < y - 1; i++) {
        let n = prompt(`${savollar[i].savol}\n${savollar[i].javoblar[0]}\n${savollar[i].javoblar[1]}\n${savollar[i].javoblar[2]}`);
        if (n == "finish" || n == "tugatish") { break; }
        if (n[0] == savollar[i].javob[0] || n[0] == savollar[i].javob[1]) sum++

    }
    let e = new Date();
    alert(`siz ${Object.keys(savollar).length-1} savoldan ${sum} tasiga to'g'ri javob berdingiz\nsiz testga ${e - s} ms vaqt sarfladingiz`);
    let again=prompt(`jarayonni qaytadan boshlaysizmi???\n1>>>>>>>ha\n2>>>>>>>yo'q`)
    if(again=="1" || again==""){sora();}
    else{alert(`hayr so'g' bo'ling`);}
}


function afterAdd() {
    let y = Object.keys(savollar).length;
    let sum = 0;
    let s = new Date();
    for (i = 0; i < y; i++) {
        let n = prompt(`${savollar[i].savol}\n${savollar[i].javoblar[0]}\n${savollar[i].javoblar[1]}\n${savollar[i].javoblar[2]}`);
        if (n == "finish" || n == "tugatish") { break; }
        if (n[0] == savollar[i].javob[0] || n[0] == savollar[i].javob[1]) sum++

    }
    let e = new Date();
    alert(`siz ${Object.keys(savollar).length} savoldan ${sum} tasiga to'g'ri javob berdingiz\nsiz testga ${e - s} ms vaqt sarfladingiz`);
}

function add() {
    count=count+1;
    savollar[Object.keys(savollar).length - 1].savol = prompt(`savol matnini kiriting`);
    savollar[Object.keys(savollar).length - 1].javoblar[0] = prompt(`birinchi variantni kiriting >>>>> namuna a)5`);
    savollar[Object.keys(savollar).length - 1].javoblar[1] = prompt(`ikkinchi variantni kiriting >>>>> namuna a)5`);
    savollar[Object.keys(savollar).length - 1].javoblar[2] = prompt(`uchinchi variantni kiriting >>>>> namuna a)5`);
    savollar[Object.keys(savollar).length - 1].javob[0] = prompt(j`avobni kiriting >>>>> namuna a`);
    alert('savol qoshildi');
    sora();
}
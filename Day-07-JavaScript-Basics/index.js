let count=document.getElementById("count");
let count_entries=document.getElementById("entries");
let c=0;
function increment(){
    c=c+1;
    count.textContent=c;
}
function save(){
    let countstr=c+" - ";
    count_entries.textContent +=countstr;
    c=0;
    count.textContent=c;
}
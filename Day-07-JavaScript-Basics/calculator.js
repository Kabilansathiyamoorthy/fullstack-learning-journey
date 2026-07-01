let a=3;
let b=6;
document.getElementById("num1").textContent=a;
document.getElementById("num2").textContent=b;
let result=document.getElementById("result");
function addition(){
    let c=a+b;
    result.textContent="sum : "+c;
}
function sub(){
    let c=a-b;
    result.textContent="sum : "+c;
}
function mul(){
    let c=a*b;
    result.textContent="sum : "+c;
}
function div(){
    let c=a/b;
    result.textContent="sum : "+c;
}
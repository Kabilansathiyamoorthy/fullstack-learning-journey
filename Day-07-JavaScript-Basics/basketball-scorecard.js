let h_score=document.getElementById("home-score");
let g_score=document.getElementById("guest-score");
let initial_home_score=0;
let initial_guest_score=0;
function h_onepoint(){
    initial_home_score+=1;
    h_score.textContent=initial_home_score;
}
function h_twopoint(){
    initial_home_score+=2;
    h_score.textContent=initial_home_score;
}
function h_threepoint(){
    initial_home_score+=3;
    h_score.textContent=initial_home_score;
}
function g_onepoint(){
    initial_guest_score+=1;
    g_score.textContent=initial_guest_score;
}
function g_twopoint(){
    initial_guest_score+=2;
    g_score.textContent=initial_guest_score;
}
function g_threepoint(){
    initial_guest_score+=3;
    g_score.textContent=initial_guest_score;
}
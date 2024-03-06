console.log("test")
let gamemode = 5;
document.querySelector(".fst-5").classList.add("selected");

document.querySelector(".fst-10").addEventListener('click', e => {
    gamemode = 10;
    document.querySelector(".fst-10").classList.add("selected");
    document.querySelector(".fst-5").classList.remove("selected");
    document.querySelector(".fst-20").classList.remove("selected");
});

document.querySelector(".fst-5").addEventListener('click', e => {
    gamemode = 5;
    document.querySelector(".fst-5").classList.add("selected");
    document.querySelector(".fst-10").classList.remove("selected");
    document.querySelector(".fst-20").classList.remove("selected");
});

document.querySelector(".fst-20").addEventListener('click', e => {
    gamemode = 20;
    document.querySelector(".fst-20").classList.add("selected");
    document.querySelector(".fst-5").classList.remove("selected");
    document.querySelector(".fst-10").classList.remove("selected");
});

let user_img = document.querySelector(".user-img");
let cpu_img = document.querySelector(".cpu-img");


let rock_btn = document.querySelector(".rock");
let paper_btn = document.querySelector(".paper");
let scissors_btn = document.querySelector(".scissors");

let user_counter = 0;
let cpu_counter = 0;

let getCpuCounter = () => {return cpu_counter;}
let getUserCounter = () => {return user_counter;}

let user_score = document.querySelector(".user-score");
let cpu_score = document.querySelector(".cpu-score");


cpu_img.src = "assets/cpu_start.png";


let decalreWinner = (winner) => {
    if(winner == "cpu"){
        cpu_img.src = "assets/yay.png";
        user_img.src = "assets/hereastar.png";
        document.querySelector(".cpu-game").classList.remove("visible");
        document.querySelector(".user-overlay").classList.remove("visible");
    }
    else{
        cpu_img.src = "assets/loveyou.png";
        user_img.src = "assets/rockin.png";
        document.querySelector(".cpu-game").classList.remove("visible");
        document.querySelector(".user-overlay").classList.remove("visible");
    }
}

let solve = (choice) => {
    let cpu_choice = Math.floor((Math.random() * 684681547468)%3)
    if(cpu_choice == choice);
    else if(choice == 2 && cpu_choice == 0) cpu_counter++;
    else if(choice == 0 && cpu_choice == 2) user_counter++;
    else if( cpu_choice > choice) cpu_counter++;
    else user_counter++;
    return cpu_choice;
}
let updateAnim = (cpu_choice) =>{
    cpu_score.textContent=cpu_counter;
    user_score.textContent=user_counter;
    cpu_img.src = (cpu_choice==0)? "assets/paper_cpu.png" : ((cpu_choice==2)? "assets/rock_cpu.png" :"assets/scissors_cpu.png");
    document.querySelector(".cpu-game").classList.remove("visible");
}

rock_btn.addEventListener("click",  e => {
    rock_btn.classList.add("btn-selected");
    paper_btn.classList.remove("btn-selected");
    scissors_btn.classList.remove("btn-selected");
    user_img.src="assets/rock.png";
    let cpu_choice = solve(2);
    document.querySelector(".cpu-game").classList.add("visible");
    setTimeout(()=>{updateAnim(cpu_choice)},1000);
    if(cpu_counter == gamemode) {
        setTimeout(()=>{
        document.querySelector(".cpu-game").classList.add("visible");
        document.querySelector(".user-overlay").classList.add("visible");
        document.querySelector(".cpu-wait-text").textContent="CPU WON";
        document.querySelector(".cpu-w").classList.add("visible");
        document.querySelector(".cpu-wait-text").classList.add("green");
        setTimeout(()=>decalreWinner("cpu"),1000);
    },2000);
    }
    if(user_counter == gamemode) {
        setTimeout(()=>{
        document.querySelector(".cpu-game").classList.add("visible");
        document.querySelector(".user-overlay").classList.add("visible");
        document.querySelector(".user-w").classList.add("visible");
        document.querySelector(".user-wait-text").textContent="YOU WON 🥳";
        document.querySelector(".cpu-wait-text").textContent="";
        document.querySelector(".wait-text").classList.add("green");
        setTimeout(()=>decalreWinner("user"),1000);
    },2000);
    if(cpu_counter >= gamemode || user_counter >= gamemode) {
        rock_btn.disabled = true;
        rock_btn.classList.remove("btn-selected")
        paper_btn.disabled= true;
        scissors_btn.disabled = true;
    }
    }
}

)
paper_btn.addEventListener("click", e => {
    rock_btn.classList.remove("btn-selected");
    paper_btn.classList.add("btn-selected");
    scissors_btn.classList.remove("btn-selected");
    user_img.src="assets/paper.png";
    let cpu_choice = solve(0);
    document.querySelector(".cpu-game").classList.add("visible");
    setTimeout(()=>{updateAnim(cpu_choice)},1000);
    if(cpu_counter == gamemode) {
        setTimeout(()=>{
        document.querySelector(".cpu-game").classList.add("visible");
        document.querySelector(".user-overlay").classList.add("visible");
        document.querySelector(".cpu-w").classList.add("visible");
        document.querySelector(".cpu-wait-text").textContent="CPU WON";
        document.querySelector(".cpu-wait-text").classList.add("green");
        setTimeout(()=>decalreWinner("cpu"),1000);
    },2000);
    }
    if(user_counter == gamemode) {
        setTimeout(()=>{
        document.querySelector(".cpu-game").classList.add("visible");
        document.querySelector(".user-overlay").classList.add("visible");
        document.querySelector(".user-w").classList.add("visible");
        document.querySelector(".user-wait-text").textContent="YOU WON 🥳";
        document.querySelector(".cpu-wait-text").textContent="";
        document.querySelector(".wait-text").classList.add("green");
        setTimeout(()=>decalreWinner("user"),1000);
    },2000);
    if(cpu_counter >= gamemode || user_counter >= gamemode) {
        rock_btn.disabled = true;
        rock_btn.classList.remove("btn-selected")
        paper_btn.disabled= true;
        scissors_btn.disabled = true;
    }
    }
}
)
scissors_btn.addEventListener("click", e => {
    rock_btn.classList.remove("btn-selected");
    paper_btn.classList.remove("btn-selected");
    scissors_btn.classList.add("btn-selected");
    user_img.src="assets/scissors.png";
    let cpu_choice = solve(1);
    document.querySelector(".cpu-game").classList.add("visible");
    setTimeout(()=>{updateAnim(cpu_choice)},1000);
    if(cpu_counter == gamemode) {
        setTimeout(()=>{
        document.querySelector(".cpu-game").classList.add("visible");
        document.querySelector(".user-overlay").classList.add("visible");
        document.querySelector(".cpu-w").classList.add("visible");
        document.querySelector(".cpu-wait-text").textContent="CPU WON";
        document.querySelector(".cpu-wait-text").classList.add("green");
        setTimeout(()=>decalreWinner("cpu"),1000);
    },2000);
    }
    if(user_counter == gamemode) {
        setTimeout(()=>{
        document.querySelector(".cpu-game").classList.add("visible");
        document.querySelector(".user-overlay").classList.add("visible");
        document.querySelector(".user-wait-text").textContent="YOU WON 🥳";
        document.querySelector(".cpu-wait-text").textContent="";
        document.querySelector(".user-w").classList.add("visible");
        document.querySelector(".wait-text").classList.add("green");
        setTimeout(()=>decalreWinner("user"),1000);
    },2000);
    if(cpu_counter >= gamemode || user_counter >= gamemode) {
        rock_btn.disabled = true;
        rock_btn.classList.remove("btn-selected")
        paper_btn.disabled= true;
        scissors_btn.disabled = true;
    }
    }
}
)


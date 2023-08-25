
/// <reference path="player.ts"/>
/// <reference path="games.ts"/>


let newGame:Game;

document.getElementById('startGame')!.addEventListener('click',()=>{
 let scorePrevious:HTMLElement=document.getElementById("postedScores")!;
if(scorePrevious.innerText != "No scores yet"){
    scorePrevious.innerText="No scores yet";

}

const player:Player=new Player();
player.name=Utility.getValue('playername');

const problemCount: number =Number(Utility.getValue('problemCount'));
const factor: number =Number(Utility.getValue('factor'));

newGame =new Game(player,problemCount,factor);
newGame.displayGame();


});

document.getElementById('calculate')!.addEventListener('click',()=>{
    newGame.calculateScore();
});




















// document.getElementById("startGame")!.addEventListener('click',startGame);

// function startGame(){
//     let playerName:string|undefined= getValue('playername');
//     logPlayer(playerName);
//     postScore(80,playerName);


// }

// //aaaaaaaaaaaaaaaaaaaaaaaa

// function logPlayer(name:string ="Default Name"):void{
//     console.log(`player name is ${name}`);
// }

// function postScore(score: number,playerName:string="Default Value"):void{
    
//     const scoreElemen:HTMLElement|null = document.getElementById('postedScores');
//     scoreElemen!.innerText=`${playerName}-${score}`;
// }

// const per:Player=new Player();
// per.name="AAMIR";
// console.log(per.formatName());
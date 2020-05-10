var ply;
var canvas;

var playerCount;
var allPlayers;
var database;

var form,player,game;

var p1,p2,p3,p4;
var bg;

var song;

var p1Img,p2Img,p3Img,p4Img
var zombie,zombieimg;

var distance = 0;

var gameState = 0;

function preload(){
    p1Img = loadImage('images/player1.png');
    p2Img = loadImage('images/player2.png');
    p3Img = loadImage('images/player3.png');
    p4Img = loadImage('images/player4.png');

    zombieimg = loadAnimation('images/zo.gif')
    
    bg = loadImage("images/zw.png");
    song = loadSound('songs/Anjaam Pathira.mp3');
    
}





function setup(){
canvas =  createCanvas(displayWidth - 20,displayHeight - 30);
database = firebase.database();
game = new Game();
game.getState();
game.start();   


}
function mousePressed() {
    if (song.isPlaying()) {
     
      song.stop();
      
    } else {
      song.play();
      
  }
  
function draw(){
   playSound();
 if(playerCount === 4){
     game.update(1);
 }  
 if(gameState === 1){
     clear();
     game.play();
 }
     if(gameState === 2){
         game.end();
     }
    
 
}}
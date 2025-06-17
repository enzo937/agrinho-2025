var tela=0;

var x = 150
var y = 100
var l = 100
var h = 30

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //inicializando a tela principal
  if(tela==0){
    //menu();
  }
  //inicializando a tela 1
  if(tela==1){
    tela1();
  }
  if(tela==2){
    tela2();
  }
  if(tela==3){
    tela3();
  }

}
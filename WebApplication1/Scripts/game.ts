var stage: createjs.Stage;
var canvas;
var helloText:createjs.Text;

class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    fights() {
        console.log("He Fights");
    }
}

function init()
{
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);

    createjs.Ticker.addEventListener("tick", gameLoop);
    main();

    var tom = new Player();
    tom.fights();
}
function gameLoop() {
    helloText.y += 1;
    helloText.rotation += 1;
    stage.update();
}

function main() {
    helloText = new createjs.Text("hello world", "40px Consolas", "#000000");
    stage.addChild(helloText);
    helloText.x = 100;
    helloText.y = 10;
}

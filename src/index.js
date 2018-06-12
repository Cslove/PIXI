import * as PIXI from 'pixi.js';
import './index.css';
import all from './img/practice.json'

let Application = PIXI.Application,
	Sprite = PIXI.Sprite,
	Loader = PIXI.loader,
	resources = PIXI.loader.resources;
let app = new Application();
	app.renderer.view.style.position = "absolute";
	app.renderer.view.style.display = "block";
	app.renderer.autoResize = true;
	app.renderer.resize(window.innerWidth, window.innerHeight);
	document.body.appendChild(app.view);

Loader.add('./img/practice.json').load(setup);

console.log(PIXI.loader.resources)
function setup(){
	let id = PIXI.loader.resources["./img/practice.json"].textures;
	
	let sprite = new Sprite(id['down_bird0.png']);
	sprite.x = 300;
	sprite.y=500;
	sprite.width = 200;
	sprite.height = 200;
	app.stage.addChild(sprite)
}
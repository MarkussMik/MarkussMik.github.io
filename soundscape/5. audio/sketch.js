let userHasClicked = false;

let riverSound;
let metalSound;

function preload() {
  soundFormats('mp3', 'ogg');
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER)
  textSize(30)

  riverSound.setVolume(0) // min volume
  metalSound.setVolume(0.5)
 
}

function draw() {
  let metalColor = color('red');
  let riverColor = color('yellow');

  background('hotpink');

  if(userHasClicked == false){

  text('Click here to play nice sound!',
    width/2,
    height/2 // alignment of the text
    )
} 
  else {
  if(riverSound.isPlaying() == false){
    riverSound.play();
  }

    if(metalSound.isPlaying() == false){
      metalSound.play();
    }
    let targetVolumeriver = map(
      mouseX,
      0, // min screen coordinate
      width, // max screen coordinate
      0, // min volume
      1 //max volume
    )
    riverSound.setVolume(targetVolumeriver)
  
    let targetVolumemetal = map(
      mouseX,
      0, // min screen coordinate
      width, // max screen coordinate
      1, // min volume
      0 //max volume
    )
    metalSound.setVolume(targetVolumemetal)
  
    let targetColor = lerpColor(riverColor, metalColor, targetVolumeriver)
    background(targetColor)
}
}
function mouseClicked(){
  userHasClicked = true;
}
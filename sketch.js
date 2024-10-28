const paragraphe = document.getElementById("para")
let montrerTexte = false

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function Bouton(){
  montrerTexte =!montrerTexte
  console.log("COUCOU")
  if (montrerTexte ){
    paragraphe.style.display = 'inline';
  }
  else {
    paragraphe.style.display = 'none';
  }
}

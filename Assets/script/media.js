function myTimer() {
  let picker = document.getElementById("colorpicker");
  let root = document.querySelector(":root");
  root.style.setProperty("--Mycolor", `${picker.value}`);
  console.log(picker.value);
} // questa funzione legge il colore del picker sul sito e lo attribuisce alla variabile css

setInterval(myTimer, 100); // la funzione è in attesa per un cambio di colore ogni 100 ms

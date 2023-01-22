function myTimer() {
  let picker = document.getElementById("colorpicker");
  let root = document.querySelector(":root");
  root.style.setProperty("--Mycolor", `${picker.value}`);
  //console.log(picker.value);
  if (picker.value == "#ffffff") {
    document.getElementById("scritta").style.color = "black"; //cambia il colore della scritta per diventare leggibile nel caso in cui il colore è bianco
  }
} // questa funzione legge il colore del picker sul sito e lo attribuisce alla variabile css

setInterval(myTimer, 100); // la funzione è in attesa per un cambio di colore ogni 100 ms

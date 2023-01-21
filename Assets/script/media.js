function myTimer() {
  let picker = document.getElementById("colorpicker");
  let root = document.querySelector(":root");
  root.style.setProperty("--Mycolor", `${picker.value}`);
  console.log(picker.value);
}

setInterval(myTimer, 1000);

let input = "";
let output = document.getElementById("output");

//Affiche la valeur saisie
function ShowValue(btn) {
  input += btn.value;
  output.innerHTML = input;
}
// la fonction Operation fait le calcul et affiche le résultat
function operation() {
  output.innerHTML = eval(input);
}
//Reset
function Reset(btn) {
  output.innerHTML = "0";
  input = "";
}
//rem
function changeSigne(btn) {
  input = input * -1;
  output.innerHTML = input;
}

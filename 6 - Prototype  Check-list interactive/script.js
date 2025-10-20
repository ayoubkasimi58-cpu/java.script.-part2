const tasks = document.querySelectorAll('input[type="checkbox"]');
const first = document.getElementById("counter");


function dala() {
  let two = document.querySelectorAll('input[type="checkbox"]:checked').length;
const three = tasks.length
first.textContent = two + " / " + three + "Checkbox Counter"; 
}
for( let box of tasks){
    box.onchange = dala;
}
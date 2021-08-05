const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const btn_reset = document.querySelector('#reset');
const btn_search = document.querySelector('#search');


btn_toggle.onclick = () => {
  calculation.innerHTML = 630612094 + parseInt(length.value);
  if(author.style.display === "none"){
    author.style.display = "block";
    calculation.style.display = "none";
    btn_toggle.innerHTML = "Show Calculation";
  }
  else{
    author.style.display = "none";
    calculation.style.display = "block";
    btn_toggle.innerHTML = "Show Author";
  }
}

btn_search.onclick = () => {
  
}

btn_reset.onclick = () => {
  length.value = "5";
  color.value ="#FF0000";
  
}

// more codes for Search and Reset buttons here

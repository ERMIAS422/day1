 let input = document.getElementById("input")
 let button = document.getElementById("button")
 let result = document.getElementById("result")

button.addEventListener("click", function (){
 let meter = input.value
 let feet = meter * 3.28
 
 result.textContent = feet + "ft"
})
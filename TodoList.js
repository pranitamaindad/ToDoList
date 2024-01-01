let inputs=document.getElementById("input-box")
let text= document.querySelector(".text")

function AddInfo(){
  if(inputs.value==""){
   alert("Please add ToDo")
  }else{
    let element= document.createElement("ul")
    element.innerHTML= `${inputs.value} <i class='far fa-check-circle'></i>` 
    text.appendChild(element)
    inputs.value="";
    //    let span=document.createElement("span")
//  span.innerHTML=`&#xf058;`
//   element.appendChild(span);  
//   element.querySelector("i").addEventListener("click",remove)
// // function remove(){
// //   element.remove()
}
}

const button = document.querySelectorAll("button") 
const inputField = document.getElementById("results") 
 
   let string="";
   let array = Array.from(button);
   array.forEach(button => {
   button.addEventListener("click", (e) => {
     
    if(e.target.innerHTML==="="){
       string = eval(string);
       inputField.value = string;
    }else if(e.target.innerHTML==="C"){
       string="";
       inputField.value = string;
    }else if(e.target.innerHTML==="Del"){
     string = string.substring(0, string.length-1);
     inputField.value = string;
    }else{
      string += e.target.innerHTML;
      inputField.value = string;
    }
  });

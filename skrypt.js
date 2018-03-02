
var textarea = document.getElementById("sms");
var licznik = document.getElementById("licznik");
//console.log(textarea);

textarea.addEventListener("keyup", function (){
    console.log(textarea.value.length);
   
licznik.innerHTML = "Licznik użytych znaków: "+textarea.value.length;  
      
}, false);





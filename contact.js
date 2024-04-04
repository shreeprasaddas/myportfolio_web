let fname=document.getElementById('name');
var temp;

fname.addEventListener("keyup",function(){
    let val=fname.value;
    if(val.length <= 4 ){
        function error(){
            fname.style.outlineColor='red';
            fname.nextElementSibling.innerHTML="Invailed Username"
            fname.nextElementSibling.style="color:red;";
        }
        // setTimeout(error,2000);
        error();
        
        
    }
    else if(val.length>3){
        fname.style.outlineColor="#7050EF";
        this.nextElementSibling.innerHTML="";
        
    }
})
let email_error=false;

let email= document.querySelector('.email');
email.addEventListener("keyup",function(e){
   let email_value=email.value;
   if(email_value.indexOf('@')== -1 || email_value.indexOf('.')==-1){
       email.style="outline-color:red;"
       email_error=false;
       e.preventDefault();

   }
   else{
      email.style="outline-color:#7050EF;"
      email_error=true;
      
   }
})
let form=document.getElementById('form');

form.addEventListener("submit",function(event){
    
    if (email.value.length<5 || email_error==false){
        console.log(email_error);
        event.preventDefault();
    }
    
})

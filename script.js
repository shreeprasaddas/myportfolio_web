 var readmore=document.querySelector(".read-more")
 let para= document.getElementById("readmore-p");
 let count=0;
 
 
 console.log(para);
 readmore.addEventListener("click",function(e){
    count++;
    console.log(count);
    if(count%2 ==0 ){
        para.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima vero odio atque, repudiandae doloremque animi perferendis? Temporibus ipsam cum earum dolorem perspiciatis, optio consequatur quidem id. Adipisci quidem nulla ipsam non ."
        readmore.style.backgroundColor='white';
        readmore.style.color='#7050EF';
        
        
    }
    else{
         readmore.style.backgroundColor='#7050EF';
         readmore.style.color='white';
         para.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid asperiores eos, maiores maxime nemo vel molestias dolorem voluptate libero obcaecati voluptatum cumque excepturi dolore placeat voluptatibus, omnis, nihil dolorum minima blanditiis rerum possimus neque. Illo nisi nihil voluptates expedita nam repudiandae modi optio natus!"
         let about=document.querySelector('.about-container');
         about.style="height:300px;"
         
    }
 });





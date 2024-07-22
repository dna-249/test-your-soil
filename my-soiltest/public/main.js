function change(){
 var X = document.getElementById("nura");
 if(X.style.display === "none"){
    X.style.display ="block"
 } else{
    X.style.display ="none"
 }
};

nur.addEventListener("click", (e)=>{
     container.style.width= "90%";
     container.style.margin = "auto"; 
     document.getElementById("nura").style.display="none";
     
},
);


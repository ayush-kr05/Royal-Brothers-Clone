document.querySelector("form").addEventListener("submit",submitDetails);

var data=JSON.parse(localStorage.getItem("userDetails")) || [];
// console.log(data);
function submitDetails(){
    event.preventDefault();
    var Uemail=document.querySelector("#email").value;
    var Uphno= document.querySelector("#number").value;
    var Upass=document.querySelector("#pass").value;
    
    var obj={email:Uemail,phno:Uphno,pass:Upass};
    
    data.push(obj);
    
    localStorage.setItem("userDetails",JSON.stringify(data));
}

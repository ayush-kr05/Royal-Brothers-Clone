

let products=JSON.parse(localStorage.getItem("cart"));

let btn = document.getElementById("cont_shp_btn");
btn.addEventListener("click",function(){
  add_to_payment();
})
// let out=0;
display_data();

function display_data(){

    products.map((ele)=>{
       
       let tbody = document.getElementById("tbody");
       let tr=document.createElement("tr");
       let td1=document.createElement("td");
       let td2=document.createElement("td");
       let td3=document.createElement("td");
       let img=document.createElement("img");
       img.setAttribute("src",ele.image_url); 

       td1.append(img)
       td2.innerText=ele.name;
       td3.innerText="Rs. "+ele.price;
       tr.append(td1,td2,td3);
       tbody.append(tr);
        
    });

    let totals = document.getElementById("totals");
    let total_text=document.createElement("p");
    total_text.innerText="Total Price";
    total_text.setAttribute("id","tax_text");
    let tax_text=document.createElement("p");
    tax_text.innerText="Including ₹23.76 in taxes";
    total_text.append(tax_text)
    let total_price=document.createElement("h1");
    total_price.innerText="Rs. "+ count_tot_price();
    totals.append(total_text,total_price);
    
}
function count_tot_price(){   
    let out= products.reduce(function(acc,cur){
    let pr=parseInt(cur.price);
     return acc+pr;
   },0); 
   return out;
 }
 function add_to_payment(){
    localStorage.setItem("product_total",count_tot_price());
    localStorage.setItem("payment-method","product-payment");
 }
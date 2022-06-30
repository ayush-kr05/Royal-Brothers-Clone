

let products=JSON.parse(localStorage.getItem("cart"));
display_cart(products);

// make_data_todisplay()
/*
function make_data_todisplay(){
   
    let arry=[];
    products.map((ele)=>{
    let prod_obj={
      image_url:ele.image_url,
      name:ele.name,
      price:ele.price,
      quant:1,
      cart_price:function(){
        return this.quant*this.price;
      }
    }
    arry.push(prod_obj);
  });
//   localStorage.setItem("cart",JSON.stringify(arry));
  console.log(arry)
  display_cart(arry);
  localStorage.setItem("cart",JSON.stringify(arry));
}
*/

function display_cart(arry){
    let heading=document.getElementById("heading");
    if(!arry){
        heading.innerText="Cart is Empty, Please add items";
    }else{
    arry.map((ele)=>{
     let contents= document.getElementById("contents");
    let box=document.createElement("div");
    box.setAttribute("class","cart-product_box")
    let img=document.createElement("img");
    img.setAttribute("src",ele.image_url);
    let name=document.createElement("p");
    name.innerText=ele.name;
    let price_p=document.createElement("p");
    price_p.setAttribute("id","price_p")
    price_p.innerText="Rs. "+ele.price;
    let quantity_div = document.createElement("div");
    quantity_div.setAttribute("class","quantity_div")
    let increase = document.createElement("button");
    increase.innerText="+";
    let deccrease = document.createElement("button");
    deccrease.innerText="-";
    let Quantity=document.createElement("p");
    let quntity=1
    Quantity.innerText=quntity;
    quantity_div.append(increase,deccrease,Quantity)
    box.append(img,name,quantity_div,price_p)
     contents.append(box);
    });
}
}
document.getElementById("tot_price").innerText="Total Price : Rs."+ count_tot_price();


function count_tot_price(){   
    let out= products.reduce(function(acc,cur){
    let pr=parseInt(cur.price);
     return acc+pr;
   },0); 
   return out;
 }



/*
    function add_to_purchase(id){
      let purch_arry =[{}]
      purch_arry =products.filter((ele)=>{
          return id=ele.id;
        })
        
        product_purchase.push(purch_arry[0]);
        console.log(product_purchase)
        localStorage.setItem("purchase",JSON.stringify(product_purchase));
    }
 */
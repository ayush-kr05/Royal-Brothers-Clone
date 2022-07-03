

let Riding_gears=[
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/SMG_2_GLOVES_250x250@2x.png?",
        name: "STUDDS SMG-2 Full Finger Riding Gloves ",
        price: 590,
        id:1
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/SMG_6_GLOVES_250x250@2x.png?",
        name: "STUDDS SMG-2 Full Finger Riding Gloves ",
        price: 720,
        id:2
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/SMG_1_GLOVES_250x250@2x.png?",
        name: "STUDDS SMG-2 Full Finger Riding Gloves ",
        price: 520,
        id:3
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/TVS-Riding-Gloves-1_250x250@2x.png?v=1621487117",
        name: "STUDDS SMG-2 Full Finger Riding Gloves ",
        price: 1799,
        id:4
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/side_9b17b4c42db04087a342c4f9443c53cd_2nd_250x250@2x.jpg?v=1643002983",
        name: "Marvel Avengers RUDRA (SPIDER MAN) Backpack ",
        price: 2599,
        id:5
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/SMG_5_GLOVES_250x250@2x.png?v=1636190974",
        name: "STUDDS SMG-5 Half Finger Riding Gloves",
        price: 560,
        id:6
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/9-1_250x250@2x.jpg?v=1636465637",
        name: "Balaclava",
        price: 299,
        id:7
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/Blackurban_250x250@2x.jpg?v=1636181764",
        name: "STUDDS Urban Open Face Helmet",
        price: 995,
        id:8
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/9-1_250x250@2x.jpg?v=1636465637",
        name: "STUDDS Ninja Elite Super D3 Helmet - Matt Black",
        price: 590,
        id:9
      },
    {
        image_url:
          "//cdn.shopify.com/s/files/1/0571/9906/7323/products/TVSXPODHelmetsBLISTERINGBLACK-RedLine-1_250x250@2x.png?v=1621370427",
        name: "TVS XPOD Helmet - BLISTERING BLACK - Red Line (LARGE)",
        price: 720,
        id:10
      },
    {
        image_url:"//cdn.shopify.com/s/files/1/0571/9906/7323/products/SCOYCOK12BLACK-600x616_250x250@2x.jpg?v=1650282969",
        name:  "SCOYCO K12 ADJUSTABLE KNEE GUARDS BLACK" ,
        price: 520,
        id:11
      },
    {
        image_url:"//cdn.shopify.com/s/files/1/0571/9906/7323/products/RynoxStealthEvoPantsGrey1_800x_acea137a-4783-4411-b707-169b75a2c59e_250x250@2x.jpg?v=1648215855",
        name:  "RYNOX STEALTH EVO PANTS" ,
        price: 7999,
        id:12
      },
];

let product_incart=JSON.parse(localStorage.getItem("cart")) || [];
  make_data_todisplay(Riding_gears)
  function make_data_todisplay(Riding_gears){
      let arry=[];
      Riding_gears.map((ele)=>{
      let prod_obj={
        image_url:ele.image_url,
        name:ele.name,
        price:ele.price,
        id:arry.length,
        purchase_flg:false
      }
      arry.push(prod_obj);
    })
    display_products(arry);
  }
 

  function display_products(data){

    data.map(function (ele){
    let contents=document.getElementById("contents");
    let box=document.createElement("div");
      box.setAttribute("class","item-boxs");
    let img=document.createElement("img");
    img.setAttribute("src",ele.image_url);
    let name=document.createElement("p");
    name.innerText=ele.name;
    let price=document.createElement("p");
    price.innerText=ele.price;
    let btn=document.createElement("button");
    btn.innerText="SOLD OUT";
    btn.addEventListener("click",function (){
      addto_cart(data,ele.id);
    })
  
    box.append(img,name,price,btn);
   contents.append(box);
  });
}

function addto_cart(arry,product_id){
  cart_products=[{}]
   cart_products=arry.filter((ele)=>{
    return  ele.id == product_id ;
  });
  
  product_incart.push(cart_products[0]);
  localStorage.setItem("cart",JSON.stringify(product_incart));
  localStorage.setItem("purchase",JSON.stringify(product_incart));
}
if(product_incart.length>=1){
let cart_count=document.getElementById("cart_count");
cart_count.innerText=product_incart.length;
localStorage.setItem("cart_count",product_incart.length);
}




let availble_bikes=[
    {
        image_url:
          "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566",
        name: "Honda Activa 5G",
        row1_price: 650,
        row2_price: 750,
        availble:"Daily",
        excess_km: 4.0,
        km_limit: 120.0,
        id:1
      },
    {
        image_url:
          "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/257/medium/ntorq2.png?1571407789",
        name: "TVS Ntorq 125",
        row1_price: 650,
        row2_price: 750,
        availble:"MON-FRIDAY",
        excess_km: 4.0,
        km_limit: 120.0,
        id:2
      },
    {
        image_url:
          "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/020/medium/FZ_Version_1.png?1504100292",
        name: "Yamaha FZ",
        row1_price: 650,
        row2_price: 750,
        availble:"TUES - SUN",
        excess_km: 4.0,
        km_limit: 120.0,
        id:3
      },
      {
        image_url:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566",
        name:"Honda Activa 5G",
        row1_price: 650,
        row2_price: 750,
        available:"Daily",
        excess_km: 4.0,
        km_limit :120.0,
        id:5
    
    },
    {
        image_url:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/257/medium/ntorq2.png?1571407789",
        name:"TVS Ntorq 125",
        row1_price: 650,
        row2_price: 750,
        available:"Daily",
        excess_km: 4.0,
        km_limit :120.0,
        id:6
    
    },
    {
        image_url:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/016/medium/Bajaj_Pulsar-min_2.png?1519738545",
        name:"Bajaj Pulsar 150",
        row1_price: 650,
        row2_price: 750,
        available:"Daily",
        excess_km: 4.0,
        km_limit :120.0,
        id:7
    
    },
    {
        image_url:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/020/medium/FZ_Version_1.png?1504100292",
        name:"Yamaha FZ",
        row1_price: 650,
        row2_price: 750,
        available:"Daily",
        excess_km: 4.0,
        km_limit: 120.0,
        id:8
    
    },
    {
        image_url:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/265/medium/Glamour_125.png?1571327418",
        name:"Hero Glamour",
        row1_price: 650,
        row2_price: 750,
        available:"Daily",
        excess_km: 4.0,
        km_limit: 120.0,
        id:9
    
    },
    {
        image_url:
        "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/014/medium/Himalayan_RE-min_2.png?1519739226",
        name:"Royal Enfield Himalayan",
        row1_price: 650,
        row2_price: 750,
        available:"Daily",
        excess_km: 4.0,
        km_limit: 120.0,
        id:10
    
    },
   
];

let bike_incart=JSON.parse(localStorage.getItem("cart")) || [];
  make_data_todisplay(availble_bikes)

  function make_data_todisplay(availble_bikes){
      let arry=[];
      availble_bikes.map((ele)=>{
      let prod_obj={
        image_url:ele.image_url,
        name:ele.name,
        price:ele.price,
        id:arry.length,
        purchase_flg:false
      }
      arry.push(prod_obj);
    })
    display_products(availble_bikes);
  }

  function display_products(data){

    data.map(function (ele){
    let contents=document.getElementById("container");

    let box=document.createElement("div");
     box.setAttribute("class","box");
      let name=document.createElement("h3");
       name.setAttribute("id","bike_name");
      name.innerText=ele.name;

   let img= document.createElement("img");
   img.setAttribute("src",ele.image_url);
   img.setAttribute("id","bike_img");
    
     
    let availbilty_p = document.createElement("p");
    availbilty_p.setAttribute("id","availbilty_p");
    availbilty_p.innerText = ele.availble;

    let price_details = document.createElement("div");
    price_details.setAttribute("id","details");

   //  ======= Row-1 Code ======
    let row1_days=document.createElement("h4");
     row1_days.setAttribute("id","row1-availblity");
    row1_days.innerText="Mon-Thu";

    let row1_day_n_price_div=document.createElement("div");
    row1_day_n_price_div.setAttribute("class","day_n_price ");

     let row1_day_sts = document.createElement("p");
     row1_day_sts.setAttribute("id","row1_day_sts");
    row1_day_sts.innerText="Full day";

    let row1_price = document.createElement("p");
    row1_price.innerText="Rs. "+ele.row1_price;
    row1_day_n_price_div.append(row1_day_sts,row1_price);

  //  ======= Row-2 Code ======
  let row2_days=document.createElement("h4");
  row2_days.setAttribute("id","row2-availblity");
 row2_days.innerText="Fri-Sun";

 let row2_day_n_price_div=document.createElement("div");
 row2_day_n_price_div.setAttribute("class","day_n_price")

  let row2_day_sts = document.createElement("p");
  row2_day_sts.setAttribute("id","row2_day_sts");
 row2_day_sts.innerText="Full day";

 let row2_price = document.createElement("p");
 row2_price.innerText="Rs. "+ele.row2_price;
 row2_day_n_price_div.append(row2_day_sts,row1_price);

  //  ======= Row-3 Code ======
    let row3_heading=document.createElement("h4");
     row3_heading.setAttribute("id","row3-heading");
    row3_heading.innerText="Excess charges";
    let row3_day_n_price_div = document.createElement("div");
  
    let excess_chrges_keys = document.createElement("div");
    excess_chrges_keys.setAttribute("class","excess_chrges")
     excess_chrges_keys.setAttribute("id","excess_chrges_keys");
    let excess_km_key = document.createElement("p");
    excess_km_key.innerText = "Excess km";
    let km_limit_key = document.createElement("p");
    km_limit_key.innerText = "km Limit";
    excess_chrges_keys.append(excess_km_key,km_limit_key);

    let excess_chrges_value = document.createElement("div");
    excess_chrges_value.setAttribute("class","excess_chrges")
    let excess_km_price = document.createElement("p");
    excess_km_price.innerText = "Rs. "+ele.excess_km;
    let km_limit_value = document.createElement("p");
    km_limit_value.innerText = ele.km_limit+"/day";
    excess_chrges_value.append(excess_km_price,km_limit_value);
    row3_day_n_price_div.append(excess_chrges_keys,excess_chrges_value);

    let btn=document.createElement("button");
     btn.setAttribute("id","Book_btn");
    btn.innerText="BOOK NOW";
    btn.addEventListener("click",function (){
      addto_cart(data,ele.id);
    })
  
      price_details.append(row1_days,row1_day_n_price_div,row2_days,row2_day_n_price_div,row3_heading,row3_day_n_price_div);
     box.append(name,img,availbilty_p,price_details,btn);
     contents.append(box);
  });
}

function addto_cart(arry,product_id){
  console.log("Add to payment ")
  // cart_products=[{}];
  //  cart_products=arry.filter((ele)=>{
  //   return  ele.id == product_id ;
  // });
  
  // bike_incart.push(cart_products[0]);
  // localStorage.setItem("cart",JSON.stringify(bike_incart));
  // localStorage.setItem("purchase",JSON.stringify(bike_incart));
}



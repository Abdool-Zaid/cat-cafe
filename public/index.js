let displayCat=()=>{
 return Math.ceil(Math.random()*32)
}
fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/staff/"+displayCat(), {
  method: "get",
})
  .then((response) => response.json())
  .then((data) => {
    let posterCat = [];
    posterCat = data;
    posterCat.forEach((cat) => {
      document.querySelector("#content").innerHTML += `
    <div class="Item"  onclick='showItem(this.id)' id="${cat.staffID}" >
    <h1>${cat.name}</h1>
    <img src="${cat.image}" alt="${cat.image}">
    <button onli>view more</button>

    </div>
    `;
    });

  })

fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/staff", {
  method: "get",
})
  .then((response) => response.json())
  .then((data) => {
    let cats = [];
    cats = data;

    cats.forEach((cat) => {
      //   document.querySelector("#content").innerHTML += `
    //   document.querySelector("#content").innerHTML += `
    // <div class="Item"  onclick='showItem(this.id)' id="${cat.staffID}" >
    // <h1>${cat.name}</h1>
    // <img src="${cat.image}" alt="${cat.image}">
    // <button>add</button>

    // </div>
    // `;
    });
  });

// let products = [];
// const productContainer = document.getElementById("products");
// fetch("http://localhost:6969/products")
//   .then((res) => res.json())
//   .then((data) => {
//     products = data;
//     console.log(data);
//     showproducts(data);
//   });



// function showproducts(products) {
//   //   prodContainer.innerHTML = "";
//   products.forEach((product) => {
//     productContainer.innerHTML += `
//             <tr>
//                 <td>${product.name}</td>
//                 <td>${product.price}</td>
//                 <td>${product.sku}</td>
//                 <td>${product.weight}</td>
//                 <td>${product.description}</td>
//                 <td><img  src="${product.image}"></td>
              
//             </tr>
//         </tbody>
// `;
//   });
// }
let cart = [];
async function showItem(id) {
  const response = await fetch("http://localhost:6969/staff/" + `${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  let cartArray = [];
  let data = await response.json();
  let product = data;
  localStorage.setItem("product", JSON.stringify(product.pop()));
  // alert(localStorage.product)
  //   console.log=0
  cartArray.push(JSON.parse(localStorage.product));
  console.log(cartArray);
  cartArray.forEach((product) => {
    // let 
    cart.push(cartArray[0].staffID);

    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
  });
}

document.querySelector('#basket').innerHTML+=``



// cart idea

// let addToCart=(user_ID,product_ID)=>{
//   let order ={
//   user_ID:"user_ID",
//   product_ID:"product_ID",
//   amount:0,
//   status:"ordered"
//   };
//   order.amount++
//   cart.push(order)
//   localstorage.setItem('cart',JSON.stringify(cart))
//   }
//   localstorage.setItem('cart',JSON.stringify(cart))
//   if(localstorage.cart.product_ID!==product_ID){
//   addToCart(user_ID,product_ID)
//   if(localstorage.user.user_ID){
//   }
//   else{
//   alert('please login in')
//   }
//   }
  
//   else{
//   for (let i = 0; i <localstorage.cart.length; i++) {
//     addToCart=(user_ID,product_ID)g
//   }
//   }
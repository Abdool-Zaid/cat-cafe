fetch("https://catcafena.herokuapp.com/staff", {
  method: "get",
})
  .then((response) => response.json())
  .then((data) => {
    let cats = [];
    cats = data;

    cats.forEach((cat) => {
      document.querySelector("#content").innerHTML += `
    <div class="Item"  onclick='showItem(this.id)' id="${cat.staffID}" >
    <h1>${cat.name}</h1>
    <img src="${cat.image}" alt="${cat.image}">
    <button>add</button>

    </div>
    `;
    });
  });

let products = [];
const productContainer = document.getElementById("products");
fetch("http://localhost:6969/products")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    console.log(data);
    showproducts(data);
  });
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

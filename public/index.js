
localStorage.setItem('user_id',('23'))
let cart = [];
let displayCat=()=>{
 return Math.ceil(Math.random()*32)
}
let revealContent=()=>{
  document.querySelector("#allCats").classList.toggle('active')
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
    <div class="Item"  id="${cat.staffID}" >
    <h1>${cat.name}</h1>
    <img src="${cat.image}" alt="${cat.image}">
    <button onclick="revealContent()" id='viewButton'>view more</button>
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
        document.querySelector("#allCats").innerHTML += `

    <div class="Item"  onclick='showItem(this.id)' id="${cat.staffID}" >
    <h1>${cat.name}</h1>
    <img src="${cat.image}" alt="${cat.image}">
    <button>book me</button>

    </div>
    `;
    });
  });
 async function showItem(id){
       const response = await fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/staff/" + `${id}`, {
        method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  let data = await response.json();
  let staff = data;
  staff.forEach((person) => {
    document.querySelector('#basket').innerHTML+=`
<div class="Item" >
<h1>${person.name}</h1>
<img src="${person.image}" alt="${person.image}">
<input type="range" min="1" max="100" value="50" class="slider" onchange="getTime(this.id)" id="mayonnaiseIsADrink${person.staffID}">

</div>
`;
});
   }

  let getTime=(id)=>{
    let personell=(id)=>{
let staff_ID =id.split('k')
      return staff_ID.pop()
    }
    let booking={
      user_id:localStorage.user_id,
      staff:personell(id),
      duration:document.querySelector(`#`+id).value,
      status:'booked'
    }
    cart.push(booking)
localStorage.setItem('cart',JSON.stringify(cart))
  }
  let checkOut=()=>{
let selection= JSON.parse(localStorage.cart)

selection.forEach((order)=>{
    async function ufn(){
      const response= await fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/orders", {
      method: "POST",
      body: JSON.stringify({
        user_id: order.user_id,
        staff_ID: order.staff,
        amount: order.duration,
        status: order.status,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data =  await response.json();
    if (data.status === "error") {
      alert(data.error);
    }
  }
  ufn()
    })
  localStorage.cart=null
}
let registerPage=()=>{
document.querySelector("#content").innerHTML = `
<form  onsubmit="event.preventDefault()">
<input type="text" id="email" placeholder="example@gmail.com"required>
<input type="password" id="password" placeholder="password"required>
<input type="text" id="name" placeholder=" full name"required>
<input type="text" id="billing_adress" placeholder="billing address"required>
<input type="text" id="phone" placeholder="contact number" required>
<button  onclick=" registerNewUser()">register</button>
</form>
`
}


// let registerNewUser=()=>{
    // let userData={
    //     email:document.getElementById('email').value,
    //     password:document.getElementById('password').value,
    //     full_name:document.getElementById('name').value,
    //     billing_address:document.getElementById('billing_adress').value,
    //     phone:document.getElementById('phone').value,
    //     user_type:"user"
    //     }
    //     localStorage.setItem('userData',JSON.stringify(userData))

    //     async function UserLogin() {
    //         const response = await fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/users/register", {
    //           method: "POST",
    //           mode: "no-cors",
    //           body: JSON.stringify({
    //             email:document.getElementById('email').value,
    //             password:document.getElementById('password').value,
    //             full_name:document.getElementById('name').value,
    //             billing_address:document.getElementById('billing_adress').value,
    //             phone:document.getElementById('phone').value,
    //             user_type:"user"
    //             }),
    //           headers: {
    //             "Content-type": "application/json",
    //           },
    //         });
    //         let data = response.json();
    //         console.log(data);
    //         if (data.status === "error") {
    //           alert(data.error);
    //         }
    //          else {
    //           localStorage.setItem("token", JSON.stringify(data.token));
    //           // VerifyUser();
    //           alert("registered");
    //         }
    //       }
    // UserLogin()
    
// }
async function registerNewUser() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const fullname = document.querySelector("#name").value;
  const billing_address = document.querySelector("#billing_adress").value;
  const phone = document.querySelector("#phone").value;
  fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "no-cors",
    body: JSON.stringify({
      email: email,
      password: password,
      full_name: fullname,
      billing_address: billing_address,
      country: "South Africa",
      phone: phone,
      user_type: "user",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
async function sendUserData(){
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "no-cors",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  
  
}

 let userLogin=()=>{
if (!localStorage.token){
  document.querySelector("#userLog").innerHTML=`logout`;
  document.querySelector("#content").innerHTML = `
<form  onsubmit="event.preventDefault()">
<input type="text" id="email" placeholder="example@gmail.com"required>
<input type="password" id="password" placeholder="password"required>
<button  onclick="sendUserData()">login</button>
</form>
`
let sendUserData=()=>{
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "no-cors",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  
  
}

  // localStorage.setItem('token',JSON.stringify(''))
  alert('  function')
}else{
  document.querySelector("#userLog").innerHTML=`login`;
  localStorage.clear()
  alert('logged out')
}


}


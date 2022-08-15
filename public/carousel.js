let registerPage=()=>{
document.querySelector("#content").innerHTML = `
<form  onsubmit="event.preventDefault()">
<input type="text" id="email" placeholder="example@gmail.com"required>
<input type="password" id="password" placeholder="password"required>
<input type="text" id="name" placeholder=" full name"required>
<input type="text" id="billing_adress" placeholder="billing adress"required>
<input type="text" id="phone" placeholder="contact number" required>
<button  onclick=" registerNewUser()">register</button>
</form>
`
}


let registerNewUser=()=>{
    let userData={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        full_name:document.getElementById('name').value,
        billing_adress:document.getElementById('billing_adress').value,
        phone:document.getElementById('phone').value
        }
        localStorage.setItem('userData',JSON.stringify(userData))

        async function UserLogin() {
            const response = await fetch("https://incredible-meerkat-9ef8b4.netlify.app/.netlify/functions/api/users/register", {
              method: "POST",
              mode: "no-cors",
              body: JSON.stringify(userData),
              headers: {
                "Content-type": "application/json",
              },
            });
            let data = await response.json();
            if (data.status === "error") {
              alert(data.error);
            }
             else {
              localStorage.setItem("token", JSON.stringify(data.token));
              VerifyUser();
              alert("logged in");
            }
          }
+          UserLogin()
}

let emailLogin = document.querySelector('input[name ="email-signin"]');
let passLogin = document.querySelector('input[name = "password-signin"]');
let buttonLogin = document.querySelector('.sign-in');
let loginTotalForm = document.querySelector('.btn__login');
let accountShow = document.querySelector('.account_show');
let showName = document.querySelector('.show_name');
let infoAccount = document.querySelector('.info-account');
console.log(buttonLogin);

// function checkInfoLogin(e)
// {
//    let object = sessionStorage.getItem("dataUser");
//     let object1 = JSON.parse(object);
//     console.log(object1);
//     console.log(`object1 = ${JSON.stringify(object1)}`);
    
// Object.keys(object1).forEach((key)=>{
//     var eachUser = JSON.parse(object1[key]);
//     console.log(`eachUser.userName =${eachUser.userName}`);
// });
// if(emailLogin.value != `${eachUser.userName}` || passLogin.value != `${eachUser.pass}`)
// {
//     console.log('love you');
// }

// }

function checkInfoLogin(e)
{
    let object = localStorage.getItem("dataUser");
    console.log(object);
    let object1 = JSON.parse(object);
    console.log(object1);
    console.log(`object1 = ${JSON.stringify(object1)}`);
    Object.keys(object1).forEach((key) =>{
        var eachUser = JSON.parse(object1[key]);
        console.log(eachUser);
        console.log(emailLogin.value);
        console.log(`${eachUser.userName}`);
        if(emailLogin.value == `${eachUser.userName}`)
        {
            if(passLogin.value == `${eachUser.pass}`)
            {
                console.log("you are idiot");
                loginForm.style.display = "none";
                loginTotalForm.style.display = "none";
                accountShow.style.display = "block";
                showName.innerHTML =
                `<span>${eachUser.userName}</span>` ;
                e.preventDefault();
            }
            else{
                console.log('Your password is wrong!!!');
                alert('Your password is wrong!!');
                e.preventDefault();
            }
           
           
         
        }
        else
        {
            e.preventDefault();
        }
       
        
    })
}
function showStatus()
{
if(infoAccount.style.display === "none")
{
    infoAccount.style.display ="block";
    console.log("idiot");
}
else
{
    infoAccount.style.display = "none";
    console.log("123");
}
}
buttonLogin.addEventListener('click',checkInfoLogin);
showName.addEventListener('click',showStatus);

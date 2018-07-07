let emailLogin = document.querySelector('input[name ="email-signin"]');
let passLogin = document.querySelector('input[name = "password-signin"]');
let buttonLogin = document.querySelector('.sign-in');
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
    let object = sessionStorage.getItem("dataUser");
    console.log(object);
    let object1 = JSON.parse(object);
    console.log(object1);
    console.log(`object1 = ${JSON.stringify(object1)}`);
    Object.keys(object1).forEach((key) =>{
        var eachUser = JSON.parse(object1[key]);
        console.log(eachUser);
        console.log(emailLogin.value);
        console.log(`${eachUser.userName}`);
        if((emailLogin.value != `${eachUser.userName}`)|| (passLogin.value != `${eachUser.pass}`))
        {
            console.log("Love you more");
            alert("Your email or password is wrong!!");
            e.preventDefault();
         
        }
        
    })
}
buttonLogin.addEventListener('click',checkInfoLogin);

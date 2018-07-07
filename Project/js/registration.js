let email = document.querySelector('input[name ="email"]');
let password = document.querySelector('input[name = "password"]');

let repeatPassword = document.querySelector('input[name = "repeat-password"]');
let fullName = document.querySelector('input[name = "fullname"]');
let btnSubmit = document.querySelector('.register');
const dataUser = [{
    userName :"ngochaiit0701@gmail.com",
    pass:"ngochai123",
    name:"Nguyen Ngoc Hai",    
},
{
    userName:"abc@gmail.com",
    pass:"abc1234",
    name:"Sheldon Cooper",
},]

btnSubmit.addEventListener('click', checkInfo);

function checkInfo(e)
{
    if(repeatPassword.value.trim() != password.value.trim())
    {
        
      
        e.preventDefault();
        alert("Your password confirmation does not match");
    }
    else{
        
        pushData();         
       saveDataStorage();
    }
    
}

function pushData()
{
dataUser.push(
     {
       userName:`${email.value}`,
        pass:`${password.value}`,
        name:`${fullName.value}`,
 }
    
)
}
// function saveDatatoStorage()
// {
//     console.log(dataUser);
//     let testObj={};
//     for (let i = 0; i< dataUser.length;i++){
//         testObj[i]= JSON.stringify(dataUser[i]);
//     }
// console.log('tesObj :', testObj);
// sessionStorage.setItem('DataUser',JSON.stringify(testObj));

// }
function saveDataStorage()
{
    console.log(dataUser);
    let testObject = {};
    for(let i = 0; i< dataUser.length; i++)
    {
        testObject[i] = JSON.stringify(dataUser[i]);
    }
    console.log('testObj:', testObject);
    localStorage.setItem('dataUser', JSON.stringify(testObject));
    sessionStorage.setItem('testUSer', "weldone");
}









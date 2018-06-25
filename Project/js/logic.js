const bg = ['bg1','bg2','bg3','bg4','bg5','bg6'];
let bgImages = document.getElementById('bg');
let groupIphones = document.getElementById('phone-group');
let loginForm = document.getElementById('login');
let btnLogin = document.getElementById('btnLogin');
let btnResigter = document.getElementById('btnSignUp');
let ResigterForm = document.getElementById('resigter');
console.log(loginForm);

console.log(bgImages);
console.log(groupIphones);
let index = 0;
//change back-ground image for 5s
setInterval(function()
{
   
   if(index === bg.length)
   {
       index = 0;
       
   }
  if(index <= bg.length -2)
  {
      groupIphones.style.display ="none";
    bgImages.src = "image/" +bg[index]+".jpg";
  
  }
  else if(index == bg.length -1)
  {
    groupIphones.style.display ="block";
    bgImages.src = "image/" +bg[index]+".jpg";
  
  }
  index++;
},4000);



function popupLogin()
{
  loginForm.style.top = "5%";
  loginForm.style.transition = "2s";
  loginForm.style.display = "block";
}

function popupResigter()
{
  ResigterForm.style.top = "5%";
  ResigterForm.style.transition = "2s";
  ResigterForm.style.display = "block";
}
btnLogin.addEventListener('click',popupLogin);
btnResigter.addEventListener('click',popupResigter);


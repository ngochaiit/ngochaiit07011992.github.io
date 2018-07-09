const bg = ['bg1','bg2','bg3','bg4','bg5','bg6'];
let bgImages = document.getElementById('bg');
let groupIphones = document.getElementById('phone-group');
let loginForm = document.getElementById('login');
let btnLogin = document.getElementById('btnLogin');
let btnResigter = document.getElementById('btnSignUp');
let ResigterForm = document.getElementById('resigter');
let contentFilm = document.querySelectorAll('.col');
let col1 = document.querySelector('.col1');
let col2 = document.querySelector('.col2');
let col3 = document.querySelector('.col3');
let col4 = document.querySelector('.col4');
let col5 = document.querySelector('.col5');
let contentSideFilm = document.querySelectorAll('.code-side');
let colSide1 = document.querySelector('.side1');
let colSide2 = document.querySelector('.side2');
let viewMore = document.querySelectorAll('.view');
let comback  = document.querySelectorAll('.back-view');
let resigerPopUp = document.getElementById('resigerbtn');
let btnLoginPopUp = document.getElementById('btnLoginPopup');
console.log(btnLoginPopUp);
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
//add frame to col
  // function addLayout()
  // {
  //   contentFilm.forEach(content =>
  //     {
  //       content.innerHTML = 
  //       '<div class = "row"><div class ="col-md3"><div class = "thumbnail"><a herf =""><img src =""></a></div></div></div>' +
  //       '<div class = "caption"><div class ="process"><div class ="movie"></div></div></div>'
  //     })
  // }
  //addLayout();

  function homePage(agruments)
  {
   let i = 0;
   let i2 = 0;
   let i3 = 0;
   let i4 = 0;
   let i5 = 0;
   let i6 = 0;
   let i7 = 0;
    data.forEach (e =>
    {
      
      
      if(e.tag == "PHIM HỌC TIẾNG ANH NỔI BẬT" )
      {
        i++;
        var _class = 'hide' ;
        if(i <9)
        {
          _class = 'show';
        }

        col1.innerHTML += 
        `
        
       <div class="col-md-3 ${_class}" id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><a href = "watching.html"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div></a><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
       `
      }
      
      else if(e.tag == "PHIM HỌC TIẾNG ANH MỚI NHẤT")
      {
        i2++;
        var _class = 'hide';
        if(i2 <9)
        {
          _class ='show';
        }

        col2.innerHTML +=
        `
        <div class="col-md-3 ${_class}" id ="item${i2}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><a href ="${e.src}"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div></a><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }
      else if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 1")
      {
        col3.innerHTML += 
        `
        <div class="col-md-3" ${_class} id ="item${i3}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><a href ="${e.src}"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div></a><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }

      else if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 2")
      {
        col4.innerHTML += 
        `
        <div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><a src="${e.src}"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div></a><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }

      else if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 3")
      {
        col5.innerHTML +=
        `
        <div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><a href ="${e.src}"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div></a><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }
      else if(e.tag == "Phim lẻ xem nhiều")
      {
        colSide1.innerHTML += 
        `
        <div class="movie-imgSide">
                                <div class="thumbnail-side">
                                    <img src="${e.img}">
                                </div>
                                <a href ="${e.src}"><div class="side-content movies-name" data-name ="${e.name}">
                                    <h2>${e.name}</h2>
                                    <p>${e.nameVietnamese}</p>
                                </div></a>
                            </div>
        `
      }

      else if(e.tag == "Phim bộ xem nhiều")
      {
        colSide2.innerHTML += 
        `
        <div class="movie-imgSide">
                                <div class="thumbnail-side">
                                  <img src="${e.img}">
                                </div>
                                <a href ="${e.src}"><div class="side-content movies-name" data-name ="${e.name}">
                                    <h2>${e.name}</h2>
                                    <p>${e.nameVietnamese}</p>
                                </div>
                                </a>
                            </div>
       
        `
      }

    })

  }



  
  window.onload = ()=> {
    homePage();
    cutTitleFilm();
    let getMovies = document.querySelectorAll('.movies-name');
   
     getMovies.forEach(e=> e.addEventListener('click',getNameMovies));
    viewMore.forEach(e => e.addEventListener('click', getCategory));
    comback.forEach(e => e.addEventListener('click', backCategory));
   
    
  }
  function cutTitleFilm()
  {
    let titleFilm = document.querySelectorAll('.movies-name  >h2');
    titleFilm.forEach(e =>
      {
        
        if(e.innerText.length >= 15)
        {
         let res = e.innerText.substring(0,14) +"...";
         e.innerText = res;
        }
      })
      
  }


  
function getCategory(e)
{
  
const id = e.target.dataset.id;

const parent = document.querySelector(`.${id}`);
let index = [...parent.querySelectorAll('.show')][7];
let stt = index.getAttribute('id');
var  regex = /(\d+)/g;
let number =parseInt(stt.match(regex)[0]);
if(number<parent.children.length){
  var end = number + 8;
}else{
  var end = number;
}

// console.log( number);
// console.log( parent.children.length);

if(number<parent.children.length){
  for(let i=1; i<=number;i++){
    var item = parent.querySelector('#item'+i);
    item.classList.remove('show');
    item.classList.add('hide');
  // console.log("hello i want remove class");
  
  }
  for(var i = number+1; i <= end; i ++){
    var item = parent.querySelector('#item'+i);
    item.classList.remove('hide');
    item.classList.add('show');
  }
}
// else {
//   for(var i = number+1; i <= end; i ++){
//     var item = parent.querySelector('#item'+i);
//     item.classList.remove('hide');
//     item.classList.add('show');
//     number = i;
//   }
// }


}



function backCategory(e)
{
  
const id = e.target.dataset.id;

const parent = document.querySelector(`.${id}`);
console.log(parent);

let index = [...parent.querySelectorAll('.show')][0];

console.log(index);
let stt = index.getAttribute('id');
var  regex = /(\d+)/g;
let number =parseInt(stt.match(regex)[0]);
console.log(number);
if(number<parent.children.length && number >= 9){
  var end = number - 8 ;
}else{
  var end = number +8;
  console.log(end);
}

// console.log( number);
// console.log( parent.children.length);

if(number<parent.children.length && number >= 9){
  for(let i= parent.children.length; i>= number;i--){
    var item = parent.querySelector('#item'+i);
    item.classList.remove('show');
    item.classList.add('hide');
    console.log(item);
  // console.log("hello i want remove class");
  
  }
  for(let i = end; i<  number; i++)
  {
    var item = parent.querySelector('#item' +i);
    item.classList.remove('hide');
    item.classList.add('show');
  }
 
  
}
else{
  for( let i = number; i< end; i++)
  {
    var item = parent.querySelector('#item' +i);
    item.classList.remove('hide');
    item.classList.add('show');
    console.log(item);
    console.log("stay here bro");
  }
  
}
// else {
//   for(var i = number+1; i <= end; i ++){
//     var item = parent.querySelector('#item'+i);
//     item.classList.remove('hide');
//     item.classList.add('show');
//     number = i;
//   }
// }


}


function getNameMovies(e)
{
 
  console.log(e.target.dataset.name);
sessionStorage.setItem('nameFilm',e.target.dataset.name);
  
}



// function checkSession()
// {
//   let checkData = sessionStorage.getItem('testUSer');
//   if(checkData)
//   {
//     boxLogin.style.display ="none";
//     accountShow.classList.remove('hide');
//     accountShow.style.display = "flex";
//   }
//   console.log(checkData);
// }
function popupChange()
{
  loginForm.style.display = "none";
  ResigterForm.style.display = "block";
  console.log("idiot");
}
 function popupchangetoLoginForm()
 {
   loginForm.style.display = "block";
   ResigterForm.style.display = "none";
   console.log("idiot123");
 }
btnLogin.addEventListener('click',popupLogin);
btnResigter.addEventListener('click',popupResigter);
resigerPopUp.addEventListener('click',popupChange);
btnLoginPopUp.addEventListener('click',popupchangetoLoginForm);





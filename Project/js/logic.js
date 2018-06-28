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

console.log(contentFilm);

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
    data.forEach (e =>
    {
      if(e.tag == "PHIM HỌC TIẾNG ANH NỔI BẬT")
      {
        col1.innerHTML += 
        `
        
       <div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><a href=""><img src="${e.img}"></a></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
       `
      }
      else if(e.tag == "PHIM HỌC TIẾNG ANH MỚI NHẤT")
      {
        col2.innerHTML +=
        `
        <div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><a href=""><img src="${e.img}"></a></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }
      else if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 1")
      {
        col3.innerHTML += 
        `
        <div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><a href=""><img src="${e.img}"></a></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }

      else if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 2")
      {
        col4.innerHTML += 
        `
        <div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><a href=""><img src="${e.img}"></a></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }

      else if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 3")
      {
        col5.innerHTML +=
        `
        <div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><a href=""><img src="${e.img}"></a></div></div> 
        <div class="caption"><input class="process" placeholder = "0%"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
        `
      }
      else if(e.tag == "Phim lẻ xem nhiều")
      {
        colSide1.innerHTML += 
        `
        <div class="movie-imgSide">
                                <div class="thumbnail-side">
                                    <a href=""><img src="${e.img}"></a>
                                </div>
                                <div class="side-content">
                                    <h2>${e.name}</h2>
                                    <p>${e.nameVietnamese}</p>
                                </div>
                            </div>
        `
      }

      else if(e.tag == "Phim bộ xem nhiều")
      {
        colSide2.innerHTML += 
        `
        <div class="movie-imgSide">
                                <div class="thumbnail-side">
                                    <a href=""><img src="${e.img}"></a>
                                </div>
                                <div class="side-content">
                                    <h2>${e.name}</h2>
                                    <p>${e.nameVietnamese}</p>
                                </div>
                            </div>
       
        `
      }

    })

  }

  
  homePage();

  

btnLogin.addEventListener('click',popupLogin);
btnResigter.addEventListener('click',popupResigter);


const lvl = ['level1', 'level2', 'level3'];
const newUpdate = ['Phim nổi bật','Phim xem nhiều'];
const list = ['Phim bộ','Phim lẻ'];
const Films = ['Hành động','Võ thuật','Kiếm hiệp','Phiêu lưu','Hình sự','Chiến tranh','Tình cảm','Tâm lý','Hài','Hoạt hình','Anime','Khoa học viễn tưởng','Ma-Kinh dị','Tài liệu','Sử thi - Cổ trang','Gia đình','Thể thao - âm nhạc','Kinh điển'];
let level = document.getElementById('level');
let justUpdate = document.getElementById('newUpdate');
let listChoice = document.getElementById('list');
let filmsChoice = document.getElementById('typeFilm');
let colSearch = document.querySelector('.col-search');
const searchInput = document.querySelector('input[name="search"]');
const suggestion = document.querySelector('.suggestions');
const btnSearch = document.getElementById('button-search');
const levelChoice = document.getElementById('level');
const popularChoice = document.getElementById('newUpdate');
const ListOrSeri = document.getElementById('list');
console.log(ListOrSeri);


console.log(colSearch);

window.onload = () =>
{
    putOption();
    searchContent();
    levelChoice.addEventListener('change',searchForTag);
    popularChoice.addEventListener('change',searchForPopular);
    ListOrSeri.addEventListener('change',searchForList);
    searchInput.addEventListener('input',disPlayResult); 
    let getMovies = document.querySelectorAll('.movies-name');  
    console.log(getMovies);
    getMovies.forEach(e=> e.addEventListener('click',getNameMovies)); 
}
function getNameMovies(e)
{
 
  console.log(e.target.dataset.name);
sessionStorage.setItem('nameFilm',e.target.dataset.name);
  
}
function searchForPopular()
{
    let selectedPopular = popularChoice.options[popularChoice.selectedIndex].text;
    console.log(selectedPopular);
    while(colSearch.lastChild)
    {
        colSearch.removeChild(colSearch.firstChild);
    }
    if(selectedPopular == "Mới cập nhật")
    {   let i = 0;
        data.forEach(e =>{
            if(e.popular == "Mới cập nhật")
            {   i++;
                var _class = 'show';
                colSearch.innerHTML +=
            `<div class="col-md-3"  id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"value = "10" max = "100"></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })
    }
    else if(selectedPopular == "Phim nổi bật")
    {
        let i = 0;
        data.forEach(e =>{
            if(e.popular == "Phim nổi bật")
            {   i++;
                var _class = 'show';
                colSearch.innerHTML +=
            `<div class="col-md-3"  id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100" ></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })
    }
    else if(selectedPopular == "Phim xem nhiều")
    {
        let i = 0;
        data.forEach(e =>{
            if(e.popular == "Phim xem nhiều")
            {   i++;
                var _class = 'show';
                colSearch.innerHTML +=
            `<div class="col-md-3"  id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })
    }


}

function searchForTag(e)
{
    let selectedLevel = levelChoice.options[levelChoice.selectedIndex].text;
    while(colSearch.lastChild)
    {
        colSearch.removeChild(colSearch.firstChild);
    }
    if(selectedLevel == "level1")
    {
       i = 0;
      
        console.log("i love you");
        console.log(i);
        data.forEach(e =>{
            if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 1")
            {   i++;
                var _class = 'show';
                colSearch.innerHTML +=
            `<div class="col-md-3" ${_class} id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"></progress></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })
    }
    else if(selectedLevel == "level2")
    {
        data.forEach(e =>{
            if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 2")
            {
                colSearch.innerHTML +=
            `<div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })
    }
    else if(selectedLevel == "level3")
    {
        data.forEach(e =>{
            if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 3")
            {
                colSearch.innerHTML +=
            `<div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%"value = "10" max = "100"></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })
    }
    else{
        let i = 0;
    data.forEach(e =>{
        
        if(e.tag == "Phim lẻ trang search")
        {
            i++;
            var _class = 'show';
            colSearch.innerHTML +=
            `<div class="col-md-3" ${_class} id="item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
        }
    })

}   
}
function searchForList()
{
    let selectedList = ListOrSeri.options[ListOrSeri.selectedIndex].text;
    console.log(selectedList);
    while(colSearch.lastChild)
    {
        colSearch.removeChild(colSearch.firstChild);
    }
    if(selectedList == "Phim bộ")
    {
        i = 0;
      
        console.log("i love you");
        console.log(i);
        data.forEach(e =>{
            if(e.typeOfVideo == "Phim bộ")
            {   i++;
                var _class = 'show';
                colSearch.innerHTML +=
            `<div class="col-md-3" ${_class} id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })

    }
    else if(selectedList == "Phim lẻ")
    {
        i = 0;
      
        console.log("i love you");
        console.log(i);
        data.forEach(e =>{
            if(e.typeOfVideo == "Phim lẻ")
            {   i++;
                var _class = 'show';
                colSearch.innerHTML +=
            `<div class="col-md-3" ${_class} id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"></progress><div class="movies-name" data-name = "${e.name}"><a href = "watching.html"><h2>${e.name}</h2></a><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
            }
        })
    }
}
function putOption()
{
    lvl.forEach(e => {
        level.innerHTML +=
        `<option>${e}</option>
        `
    })
    newUpdate.forEach(e =>{
        justUpdate.innerHTML +=
        `<option>${e}</option>
        `
    })
    
    list.forEach(e =>
    {
        listChoice.innerHTML +=
        `
        <option>${e}</option>
        `
    })
    Films.forEach(e =>
    
    {
        filmsChoice.innerHTML += 
        `<option>${e}</option>
        `
    })
}

function searchContent()
{  let i = 0;
    data.forEach(e =>{
        
        if(e.tag == "Phim lẻ trang search")
        {
            i++;
            var _class = 'show';
            colSearch.innerHTML +=
            `<div class="col-md-3 ${_class}" id = "item${i}"><div class="movie-img"> <div class="thumbnail"><img src="${e.img}"></div></div> 
            <div class="caption"><progress class="process" placeholder = "0%" value = "10" max = "100"></progress><a href = "watching.html" value = "10" max = "100"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div></a><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
        }
    })
}

function findFilm(wordToMatch, data)
{
    return data.filter(film =>{
      
        const regex = new RegExp(wordToMatch,'gi');
        return  film.name.match(regex) || film.nameVietnamese.match(regex)        
        
    });
}
function disPlayResult()
{
   const newArray = findFilm(this.value, data);
   const html = newArray.map(film =>
{
    return `<li><a  class = "list-search" href="watching.html"><div class ="image-search"><img src ="${film.img}"></div><div class = "content-search" data-name = "${film.name}"><h4>${film.name}</h4><h4>${film.nameVietnamese}</h4></div></a></li>`
   
    
}).join('');
suggestion.innerHTML = html;
suggestion.style.display = "block"; 
getDataSearch();
}

function getDataSearch()
{
  
        const listSearch = document.querySelector('.content-search');
        console.log(listSearch);
        listSearch.addEventListener('click',function putDatatoStore(e)
    {
        console.log(e.target.dataset.name);
        sessionStorage.setItem('nameFilm',e.target.dataset.name);

    })
    
}

function resetSearch()
{
    suggestion.style.display = "none";
}



btnSearch.addEventListener('click',resetSearch);

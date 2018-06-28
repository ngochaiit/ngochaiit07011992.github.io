const lvl = ['level1', 'level2', 'level3'];
const newUpdate = ['Phim nổi bật','Phim xem nhiều'];
const list = ['Phim bộ','Phim lẻ'];
const Films = ['Hành động','Võ thuật','Kiếm hiệp','Phiêu lưu','Hình sự','Chiến tranh','Tình cảm','Tâm lý','Hài','Hoạt hình','Anime','Khoa học viễn tưởng','Ma-Kinh dị','Tài liệu','Sử thi - Cổ trang','Gia đình','Thể thao - âm nhạc','Kinh điển'];
let level = document.getElementById('level');
let justUpdate = document.getElementById('newUpdate');
let listChoice = document.getElementById('list');
let filmsChoice = document.getElementById('typeFilm');
let colSearch = document.querySelector('.col-search');

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
{
    data.forEach(e =>{
        if(e.tag == "Phim lẻ trang search")
        {
            colSearch.innerHTML +=
            `<div class="col-md-3"><div class="movie-img"> <div class="thumbnail"><a href=""><img src="${e.img}"></a></div></div> 
            <div class="caption"><input class="process" placeholder = "0%"><div class="movies-name" data-name = "${e.name}"><h2>${e.name}</h2><p>${e.nameVietnamese}</p></div><div class="number"><i class="far fa-heart"></i><i class="far fa-user"></i><span>${e.number}</span><span>Học viên</span></div></div></div>
            `
        }
    })
}

function findFilm(wordtoFind, data)
{
    return data.filter(film =>{
        
    })
}
putOption();
searchContent();
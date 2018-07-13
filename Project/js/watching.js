const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const sameLevelCol = document.querySelector('.side2');
const introFilm = document.querySelector('.astract-content-film p');
const titleFilm = document.querySelector('.intro-title-english h2');
const titleVietnamese = document.querySelector(`.intro-title-vietnamese p`);
const numberStudent = document.querySelector('.intro-title-english span');
window.onload = () =>
{
  updateFilmSameLevel();
  changeIntro();
  let getMovies = document.querySelectorAll('.movies-name');
  getMovies.forEach(e=> e.addEventListener('click',getNameMovies));
}
function getNameMovies(e)
{
 
  console.log(e.target.dataset.name);
sessionStorage.setItem('nameFilm',e.target.dataset.name);
  
}



function changeIntro()
{
 let nameMovie = sessionStorage.getItem('nameFilm');
 console.log(nameMovie);
 data.forEach( e => {
   
   if(e.name.toUpperCase() == nameMovie.toUpperCase())
   {
     console.log("zo")
     introFilm.innerHTML =
     `${e.intro}`
     titleFilm.innerHTML =`${e.name}`
     titleVietnamese.innerHTML =`${e.nameVietnamese}`
     numberStudent.innerHTML = `${e.number} Học Viên`
   }
 })
 sessionStorage.clear();
}


function updateFilmSameLevel(agrunments)
{
  data.forEach(e =>
  
  {
    if(e.tag == "PHIM HỌC TIẾNG ANH LEVEL 1")
    {
      sameLevelCol.innerHTML +=
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
  })
}

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
  console.log(this.name);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function setFullScreen()
{
  if(video.requestFullscreen){
    video.requestFullscreen();
} 
else if (video.webkitRequestFullscreen){
    video.webkitRequestFullscreen();
}
else if (video.mozRequestFullScreen){
    video.mozRequestFullScreen();
}
else if (video.msRequestFullscreen){
    video.msRequestFullscreen();
}   
}


/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
video.addEventListener('dblclick',setFullScreen);
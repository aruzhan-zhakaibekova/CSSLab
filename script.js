var container = document.querySelector('.container');
var video = document.querySelector('.back video');

container.addEventListener('click', function (){
  if(!container.classList.contains('anim'))
  {
    container.classList.add('anim');
    video.play();
  }
});

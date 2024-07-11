let rc = document.getElementById('rotateChars')
let text = rc.innerText.trim()
let len = text.length
let grp = len / 2
let html = ""
while (len > -1) {
    let txt = text.charAt(len)
    html = `<span style="animation-delay:${len / grp}s" class="indChar ${txt.trim() === "" ? "" : "d-inline-block"} ">${txt}</span>${html}`
    len--
}
rc.innerHTML = html

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
    document.addEventListener('DOMContentLoaded', function() {
      const zoomableImage = document.querySelector('.zoomable');
      
     
      zoomableImage.classList.add('zoomed');
    });

var mySwiper = new Swiper('.swiper-container', {
  
  pagination: {
      el: '.swiper-pagination',
      
  },
});


var pagination = document.querySelector('.swiper-pagination');

if (pagination) {
  pagination.style.color = '#CEFA05'; 
  pagination.querySelectorAll('.swiper-pagination-bullet').forEach(function(bullet) {
      bullet.style.backgroundColor = '#CEFA05';
  });
}


    // !!!!
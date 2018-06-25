$(document).ready(function () {
    init()

    $('.nav-item').click(swichClass);
    $('.navbar-brand').click(swichClass);
});

function init() {
    $.getJSON("portfolio.json", portfolioOut);
}

function portfolioOut(data){
  let out='';
  for (let key in data) {
    out += `<div class="view">
                    <a href="${data[key].link}" target='_blank'>
                        <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <p class="card-text">${data[key].descr}</p>
                        <a href="${data[key].link}" target='_blank'>open</a>
                        <div class="margin"></div>
                    </div>
                </div>`;
  }
  $('.js-portfolio').html(out);
}

function swichClass(e) {
  const clickedButton = e.target;
  const tabNum = clickedButton.dataset.tab;
  
  document.querySelectorAll('.nav-item')
    .forEach( el => {
        if (el.dataset.tab === tabNum) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

$('header .wrapper img').hover(function(){
    $(this).css("transform", "rotate(360deg)");
    $(this).css("transition", "ease 2s");
}, function () {
    $(this).css("transform", "rotate(0deg)");
    $(this).css("transition", "ease 2s");
});






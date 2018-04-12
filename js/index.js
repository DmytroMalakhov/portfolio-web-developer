$('.nav-item').click(swichClass);
$('.navbar-brand').click(swichClass);

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


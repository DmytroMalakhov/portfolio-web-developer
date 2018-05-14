$(document).ready(function () {
    init()

    $('.nav-item').click(swichClass);
    $('.navbar-brand').click(swichClass);
});

function init() {
    $.getJSON("photo-coast.json", mPhotoCoast);
    $.getJSON("photo-coast.json", dPhotoCoast);
    $.getJSON("hookah.json", mHookah);
    $.getJSON("hookah.json", dHookah);
    $.getJSON("web-dev.json", mWebDev);
    $.getJSON("web-dev.json", dWebDev);
    $.getJSON("new-year.json", mNewYear);
    $.getJSON("new-year.json", dNewYear);
    $.getJSON("stub.json", mStub);
    $.getJSON("stub.json", dStub);
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

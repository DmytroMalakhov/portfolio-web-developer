$(document).ready(function () {
  $('.nav-item').click(swichClass);
  $('.navbar-brand').click(swichClass);

  $('a[data-target^="link"]').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});

function swichClass(e) {
  const clickedButton = e.target;
  const tabNum = clickedButton.dataset.tab;

  document.querySelectorAll('.nav-item')
    .forEach(el => {
      if (el.dataset.tab === tabNum) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadXMLDoc();
});

function loadXMLDoc() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        loadImages(JSON.parse(xmlhttp.responseText));
      }
      else if (xmlhttp.status == 400) {
        alert('There was an error 400');
      }
      else {
        alert('something else other than 200 was returned');
      }
    }
  };
  xmlhttp.open("GET", "portfolio.json", true);
  xmlhttp.send();
}

function loadImages(data) {
  for (let i = 0; i < data.length; i++) {

    let view = document.createElement("div");
    view.setAttribute('class', 'view');

    let links = document.createElement('a');
    links.setAttribute('href', data[i].link);
    links.setAttribute('target', '_blank');
    links.setAttribute('class', 'img-link');

    let img = document.createElement("img");
    img.setAttribute('class', 'imgClass');
    img.setAttribute('class', 'card-img-top');
    img.setAttribute('alt', 'photo of web page ' + data[i].name);
    img.src = "img/" + data[i].img;

    let cardBody = document.createElement("div");
    cardBody.setAttribute('class', 'card-body');

    let name = document.createElement("h5");
    name.setAttribute('class', 'card-title');
    name.innerHTML = toTitleCase(data[i].name);

    let descr = document.createElement("p");
    descr.setAttribute('class', 'card-text');
    descr.innerHTML = data[i].descr;

    let button = document.createElement("a");
    button.setAttribute('target', '_blank');
    button.setAttribute('href', data[i].link);
    button.innerHTML = 'open';

    let margin = document.createElement("div");
    margin.setAttribute('class', 'margin');

    document.getElementById("slide").appendChild(view);
    view.appendChild(links);
    view.appendChild(cardBody);
    document.getElementsByClassName("img-link")[i].appendChild(img);
    document.getElementsByClassName("card-body")[i].appendChild(name);
    document.getElementsByClassName("card-body")[i].appendChild(descr);
    document.getElementsByClassName("card-body")[i].appendChild(button);
    document.getElementsByClassName("card-body")[i].appendChild(margin);

    let dots = document.createElement('span');
    dots.setAttribute('class', 'dot');
    dots.setAttribute('onclick', 'currentSlide(' + (i + 1) + ')');

    document.getElementById('dots').appendChild(dots);
  }
  showSlides(slideIndex);
  //console.log(imageData);
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

let slideIndex = 1;
let prev = document.getElementById('prev');
let next = document.getElementById('next');

next.onclick = function plusSlides() {
  showSlides(slideIndex += 1);
};

prev.onclick = function minusSlides() {
  showSlides(slideIndex -= 1);
};

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('view');
  console.log(slides.length);
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
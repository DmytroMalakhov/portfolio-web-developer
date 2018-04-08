$('.nav-item').click(swichClass);

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
    })
  
}
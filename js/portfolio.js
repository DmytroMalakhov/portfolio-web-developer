function mPhotoCoast(data) {
    let out='';
    for (let key in data) {
        out += `<div class="card view">
                    <a href="${data[key].link}" target='_blank'>
                        <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <p class="card-text">${data[key].descr}</p>
                        <a href="${data[key].link}" target='_blank' class="btn btn-primary">open</a>
                    </div>
                </div>`;
    }
    $('.js-m-photo-coast').html(out);
}

function dPhotoCoast(data) {
    let out = '';
    for (let key in data) {
        out += `<a href="${data[key].link}" target='_blank' data-toggle="modal" data-target=".modal-portfolio-1">
                    <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${data[key].name}</h5>
                    <p class="card-text">${data[key].descr}</p>
                    <a href="#" target='_blank' class="btn btn-primary" data-toggle="modal"
                       data-target=".modal-portfolio-${data[key].position}">open</a>
                </div>`;
    }
    $('.js-d-photo-coast').html(out);
}

function modalPhotoCoast(data) {
    let out = '';
    for (let key in data) {
        out += `<div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-wrapper">
                            <div class="modal-info">
                                <h5>${data[key].name}</h5>
                                <p>${data[key].descr}</p>
                            </div>
                            <a href="${data[key].link}" target="_blank">
                                <button>open web page</button>
                            </a>
                            <div class="modal-img">
                                <img src="img/${data[key].modalImg}" alt="photo of web page '${data[key].name}'">
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    $('.js-modal-photo-coast').html(out);
}

function mHookah(data) {
    let out='';
    for (let key in data) {
        out += `<div class="card view">
                    <a href="${data[key].link}" target='_blank'>
                        <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <p class="card-text">${data[key].descr}</p>
                        <a href="${data[key].link}" target='_blank' class="btn btn-primary">open</a>
                    </div>
                </div>`;
    }
    $('.js-m-hookah').html(out);
}

function dHookah(data) {
    let out = '';
    for (let key in data) {
        out += `<a href="${data[key].link}" target='_blank' data-toggle="modal" data-target=".modal-portfolio-1">
                    <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${data[key].name}</h5>
                    <p class="card-text">${data[key].descr}</p>
                    <a href="#" target='_blank' class="btn btn-primary" data-toggle="modal"
                       data-target=".modal-portfolio-${data[key].position}">open</a>
                </div>`;
    }
    $('.js-d-hookah').html(out);
}

function modalHookah(data) {
    let out = '';
    for (let key in data) {
        out += `<div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-wrapper">
                            <div class="modal-info">
                                <h5>${data[key].name}</h5>
                                <p>${data[key].descr}</p>
                            </div>
                            <a href="${data[key].link}" target="_blank">
                                <button>open web page</button>
                            </a>
                            <div class="modal-img">
                                <img src="img/${data[key].modalImg}" alt="photo of web page '${data[key].name}'">
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    $('.js-modal-hookah').html(out);
}

function mWebDev(data) {
    let out='';
    for (let key in data) {
        out += `<div class="card view">
                    <a href="${data[key].link}" target='_blank'>
                        <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <p class="card-text">${data[key].descr}</p>
                        <a href="${data[key].link}" target='_blank' class="btn btn-primary">open</a>
                    </div>
                </div>`;
    }
    $('.js-m-web-dev').html(out);
}

function dWebDev(data) {
    let out = '';
    for (let key in data) {
        out += `<a href="${data[key].link}" target='_blank' data-toggle="modal" data-target=".modal-portfolio-1">
                    <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${data[key].name}</h5>
                    <p class="card-text">${data[key].descr}</p>
                    <a href="#" target='_blank' class="btn btn-primary" data-toggle="modal"
                       data-target=".modal-portfolio-${data[key].position}">open</a>
                </div>`;
    }
    $('.js-d-web-dev').html(out);
}

function modalWebDev(data) {
    let out = '';
    for (let key in data) {
        out += `<div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-wrapper">
                            <div class="modal-info">
                                <h5>${data[key].name}</h5>
                                <p>${data[key].descr}</p>
                            </div>
                            <a href="${data[key].link}" target="_blank">
                                <button>open web page</button>
                            </a>
                            <div class="modal-img">
                                <img src="img/${data[key].modalImg}" alt="photo of web page '${data[key].name}'">
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    $('.js-modal-web-dev').html(out);
}

function mNewYear(data) {
    let out='';
    for (let key in data) {
        out += `<div class="card view">
                    <a href="${data[key].link}" target='_blank'>
                        <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <p class="card-text">${data[key].descr}</p>
                        <a href="${data[key].link}" target='_blank' class="btn btn-primary">open</a>
                    </div>
                </div>`;
    }
    $('.js-m-new-year').html(out);
}

function dNewYear(data) {
    let out = '';
    for (let key in data) {
        out += `<a href="${data[key].link}" target='_blank' data-toggle="modal" data-target=".modal-portfolio-1">
                    <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${data[key].name}</h5>
                    <p class="card-text">${data[key].descr}</p>
                    <a href="#" target='_blank' class="btn btn-primary" data-toggle="modal"
                       data-target=".modal-portfolio-${data[key].position}">open</a>
                </div>`;
    }
    $('.js-d-new-year').html(out);
}

function modalNewYear(data) {
    let out = '';
    for (let key in data) {
        out += `<div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-wrapper">
                            <div class="modal-info">
                                <h5>${data[key].name}</h5>
                                <p>${data[key].descr}</p>
                            </div>
                            <a href="${data[key].link}" target="_blank">
                                <button>open web page</button>
                            </a>
                            <div class="modal-img">
                                <img src="img/${data[key].modalImg}" alt="photo of web page '${data[key].name}'">
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    $('.js-modal-new-year').html(out);
}

function mStub(data) {
    let out='';
    for (let key in data) {
        out += `<div class="card view">
                    <a href="${data[key].link}" target='_blank'>
                        <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <p class="card-text">${data[key].descr}</p>
                        <a href="${data[key].link}" target='_blank' class="btn btn-primary">open</a>
                    </div>
                </div>`;
    }
    $('.js-m-stub').html(out);
}

function dStub(data) {
    let out = '';
    for (let key in data) {
        out += `<a href="${data[key].link}" target='_blank' data-toggle="modal" data-target=".modal-portfolio-1">
                    <img class="card-img-top" src="img/${data[key].img}" alt="photo of web page '${data[key].name}'">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${data[key].name}</h5>
                    <p class="card-text">${data[key].descr}</p>
                    <a href="#" target='_blank' class="btn btn-primary" data-toggle="modal"
                       data-target=".modal-portfolio-${data[key].position}">open</a>
                </div>`;
    }
    $('.js-d-stub').html(out);
}

function modalStub(data) {
    let out = '';
    for (let key in data) {
        out += `<div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-wrapper">
                            <div class="modal-info">
                                <h5>${data[key].name}</h5>
                                <p>${data[key].descr}</p>
                            </div>
                            <a href="${data[key].link}" target="_blank">
                                <button>open web page</button>
                            </a>
                            <div class="modal-img">
                                <img src="img/${data[key].modalImg}" alt="photo of web page '${data[key].name}'">
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    $('.js-modal-stub').html(out);
}
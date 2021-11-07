const cookie = document.querySelector('.cookie-container');

function cookieDimiss() {
    window.localStorage.setItem('cookie', 'aceito');
    cookie.style.display = 'none';
}

function cookieVerify() {
    let getCookie = localStorage.getItem('cookie');
    if (getCookie === 'aceito') {
        cookie.style.display = 'none';
    }
}

cookieVerify();
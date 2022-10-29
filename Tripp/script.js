let searchBtn = document.querySelector('#search-btn'); //1
let searchBar = document.querySelector('.search-bar-container'); //2
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

/* Jika searchBtn ditekan maka searchBtn berubah jadi fa-time dan seacrBar jadi active */
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

/*Jika logo menu disentu maka menu akan berubah jadi fa-time(x) => navbar akan tampak || */
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// PELAJARI KARENA BELUM TAHU
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

/*
PENJELASAN
1. Merujuk ke icon seacrh di samping icon orang, ingat ini pake id
2. Merujuk ke kotak yang isiniya tempat search & icon search
3. window.onscroll itu untuk tambahin scroll di samping, tapi g usah pake dulu. menit [14:32]


BINGUNG
1. Dimana pengaturan untuk merubah jika fa-time (x) disentuh dia bakal bali ke semula?
*/
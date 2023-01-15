let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

document.querySelector('#close-navbar').onclick = () => {
  navbar.classList.remove('active');
};

document.querySelectorAll('.slider .video-container .controls .control-btn').forEach((btn) => {
  btn.onclick = () => {
    let src = btn.getAttribute('data-src');
    document.querySelector('.slider .video-container .video').src = src;
  };
});

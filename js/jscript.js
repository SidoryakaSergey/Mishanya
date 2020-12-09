<<<<<<< HEAD
console.log('work');

const bg = document.querySelector('.bg__page');

window.addEventListener('scroll', function () {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  console.log('scroll');
  if (pageYOffset == 0) {
    console.log('1');
    bg.style.background = 'url(/img/test_p2.jpg) no-repeat';
    bg.style.backgroundSize = 'contain';
    bg.style.backgroundAttachment = 'fixed';
  }
  if (pageYOffset == 200) {
    console.log('2');
    bg.style.background = 'url(/img/test_p1.jpg) no-repeat';
    bg.style.backgroundSize = 'contain';
    bg.style.backgroundAttachment = 'fixed';
  }
});
=======
console.log('Work');
>>>>>>> 105d38bda2d044e1bee9d6583b4a627faa0c7395

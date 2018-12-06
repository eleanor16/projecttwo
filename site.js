//based off code from Karl Stolley at https://github.com/sbwd-2018/dom-scripting/blob/master/site.js
(function(){
  if (typeof document.querySelector === 'undefined' || typeof window.getComputedStyle === 'undefined') {
    return;
  }

  document.addEventListener('DOMContentLoaded', function() {

    console.log('The DOM has loaded');

    function navToggle(){
        var html_tag = document.querySelector('html');
        html_tag.classList.remove('nojs');
        html_tag.classList.add('js');

        var heading_label = 'Menu';;
        var heading = document.querySelector('#nav');
       heading.innerHTML = '<a href="#menu">'+heading_label+'</a>';

        heading.addEventListener('click', function(){
          var content = document.querySelector('#menu');
          var label = document.querySelector('#nav a');
          content.classList.toggle('visible');

          if (label.textContent === heading_label) {
            label.textContent = 'Hide Menu';
          } else {
            label.textContent = 'Menu';
          }
        })
      }

    navToggle();
    buttonDecider();
    window.addEventListener('resize', buttonDecider);

  });

  function buttonDecider() {
    var html_tag = document.querySelector('html');
    if (typeof window.matchMedia === 'undefined') {
      return;
    }

    if (window.matchMedia("(min-width: 426px)"). matches) {
        html_tag.classList = 'nojs';
    } else {
      html_tag.classList = 'js';
    }
  }


  console.log("JavaScript is working!");
})();

(function(){
  if (typeof document.querySelector === 'undefined') {
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){

    console.log('The DOM has loaded');

    var html_tag = document.querySelector('html');
    html_tag.classList.remove('nojs');

    html_tag.classList.add('js');
    var heading_label = 'Menu';
    var heading = documnet.querySelector('nav');
    heading.innerHTML = '<a href="#menu">'+heading_label+'</a>';
    heading.addEventListener('click',function(){
      var content = document.querySelector('#menu');
      var label = document.querySelector('nav a');

      content.classList.toggle('visible');

      if (label.textContent === heading_label) {
        label.textContent = 'Menu';
      } else {
        label.textContent = 'Hide Menu';
      }
    })
  });

  console.log("JavaScript is working!");

});

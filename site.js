console.log('top is here');
(function(){
  console.log('funtion ran');
  if (typeof document.querySelector === 'undefined' || typeof window.getComputedStyle === 'undefined') {
  console.log("JavaScript is working!");
    return;
  }

  document.addEventListener('DOMContentLoaded', function navToggle() {

    console.log('The DOM has loaded');


    var html_tag = document.querySelector('html');
    console.log('12 is good');
    html_tag.classList.remove('nojs');
    console.log('14 is good');
    html_tag.classList.add('js');
    console.log('16 is good');
    var heading_label = 'Menu';
    console.log('18 is good');
    var heading = document.querySelector('#nav');
    console.log('20 is good');
   heading.innerHTML = '<a href="#menu">'+heading_label+'</a>';
   console.log('22 is good');
    heading.addEventListener('click', function(){
      console.log('line 24');
      var content = document.querySelector('#menu');
      console.log('25 is good');
      var label = document.querySelector('#nav a');
      console.log('27 is good');
      content.classList.toggle('visible');
      console.log('29 is good');
      if (label.textContent === heading_label) {
        label.textContent = 'Hide Menu';
        console.log('32 is good');
      } else {
        label.textContent = 'Menu';
        console.log('35 is good');
      }
    })

    if (typeof window.matchMedia === 'undefined') {
      return;
    }

    if (window.matchMedia("(min-width: 426px)"). matches) {
        html_tag.classList = 'nojs';
    } else {
      html_tag.classList = 'js';
    }
    console.log('51 works');
  });

  navToggle(); /*problems have arisen here*/




  console.log("JavaScript is working!");
})();

/*(function() {
  console.log('59 works');
  if (typeof document.querySelector === 'undefined' || typeof window.getComputedStyle === 'undefined') {
    return;
  }
  console.log('61 works');

  function responsiveFeature(feature) {
  /*STOPPED WORKING AT PREVIOUS LINE*/
  /*  console.log('59 good');
    var size = window
      .getComputedStyle(document.body, ':after')
      .getPropertyValue('content');
      console.log('65 good');
    var has_feature = true;
    console.log('67 good');
    if(size.indexOf(feature) === -1) {
      console.log('line 69');
      has_feature = false;
      console.log('line 71');
    }
    return has_feature;
  }



  console.log("JavaScript is working!");
})(); */

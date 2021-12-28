document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  console.log(handle.style.left);
  wrapper.addEventListener('mousemove', function(e){
    console.log("on");
    
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
  wrapper.addEventListener('mouseleave',function(){
    handle.style.left=50+'%';
    topLayer.style.setProperty('width','calc(50vw + 1000px)');
  });
});
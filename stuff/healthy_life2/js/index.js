window.onload = function() {  
  timeShow();

  //画布方法
  var canvas=document.getElementById('mycanvas');
  var canv=canvas.getContext('2d');
  canv.lineWidth = 0.2; 
  canv.strokeStyle = 'rgba(255,255,255,1)'; 

  canv.beginPath();
  canv.moveTo(0,150.5);             /*从左上角开始的起点的坐标*/
  canv.lineTo(680,0);               /*从左上角开始的第二个点的坐标*/
  canv.stroke();                    /*勾勒线条(与之相对有fill方法，用于填充)*/

  canv.moveTo(0,410.5);             /*从左上角开始的第三个点的坐标*/
  canv.lineTo(680,260);
  canv.stroke();

  //header悬浮固定于顶部
  document.addEventListener('mousewheel', function() {  
  var header = document.querySelector('header');
  var pic = document.querySelector('#pic');
  var nav = document.querySelector('nav');
    if((document.body.scrollTop || document.documentElement.scrollTop) > 620) {
      header.setAttribute('class', 'sticky');
      pic.style.display = 'inline-block';
      nav.style.display = 'block';
    } else {
      header.removeAttribute('class');
      pic.style.display = 'none';
      nav.style.display = 'none';
    }
  }, false);
  document.addEventListener('keydown', function(event) {
    var keycode = (event ? event : window.event).keyCode;
    if(keycode == 40 || keycode || 34) {          //判断按下的是pageDown还是Down Arrow
      var header = document.querySelector('header');
      var pic = document.querySelector('#pic');
      var nav = document.querySelector('nav');
        if((document.body.scrollTop || document.documentElement.scrollTop) > 620) {
          header.setAttribute('class', 'sticky');
          pic.style.display = 'inline-block';
          nav.style.display = 'block';
        } else {
          header.removeAttribute('class');
          pic.style.display = 'none';
          nav.style.display = 'none';
        }
    } else {
      return false;
    }
  }, false); 
  loadFont('outerFont', document.querySelector('.main'));
};
//文章中图片的轮播
function timeShow() {
    var sImg = ['images/silence/1.gif', 'images/silence/2.jpg', 'images/silence/3.jpg', 'images/silence/4.jpg'];
    var fImg = ['images/fashion/1.jpg', 'images/fashion/2.jpg', 'images/fashion/3.jpg'];
    var rImg = ['images/rock/1.jpg', 'images/rock/2.jpg', 'images/rock/3.jpg'];
    var cImg = ['images/classical/1.jpg', 'images/classical/2.jpg'];
    var s = document.querySelector('#silence_img');
    var f = document.querySelector('#fashion_img');
    var r = document.querySelector('#rock_img');
    var c = document.querySelector('#classical_img');
    var rand1 = Math.floor(Math.random()*sImg.length);
    var rand2 = Math.floor(Math.random()*fImg.length);
    var rand3 = Math.floor(Math.random()*rImg.length);
    var rand4 = Math.floor(Math.random()*cImg.length);        //若图片个数一样，则可只用一个rand2

    s.src = sImg[rand1];
    f.src = fImg[rand2];
    r.src = rImg[rand3];
    c.src = cImg[rand4];

    setTimeout('timeShow()', 3000);
  }
//加载外部字体
function loadFont(font, ele) {
  var span = document.createElement('span');
  span.innerHTML = 'gW@i#Q!T';
  span.style.visibility = 'hidden';
  span.style.fontSize = '500px';
  span.style.fontFamily = font;
  document.body.appendChild(span);
  var width_now = span.offsetWidth;
  var interval_check = setInterval(function() {
    if(span.offsetWidth != width_now) {
      clearInterval(interval_check);
      ele.style.fontFamily = font;
      document.body.removeChild(span);
      span = null;
    }
  }, 50);
}
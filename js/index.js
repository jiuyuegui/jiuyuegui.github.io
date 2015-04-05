window.onload = function() {  
  // show();
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
};
//文章中图片的轮播
function timeShow() {
    var foodImg = ['image/food/2.jpg', 'image/food/4.jpg', 'image/food/5.jpg', 'image/food/6.jpg'];
    var exerciseImg = ['image/exercise/1.jpg', 'image/exercise/2.jpg', 'image/exercise/3.jpg'];
    var psychologyImg = ['image/psychology/1.jpg', 'image/psychology/2.jpg', 'image/psychology/4.jpg'];
    var habitImg = ['image/habit/1.jpg', 'image/habit/2.jpg'];
    var food = document.querySelector('#food_img');
    var exercise = document.querySelector('#exercise_img');
    var psychology = document.querySelector('#psychology_img');
    var habit = document.querySelector('#habit_img');
    var rand2 = Math.floor(Math.random()*foodImg.length);
    var rand3 = Math.floor(Math.random()*exerciseImg.length);
    var rand4 = Math.floor(Math.random()*psychologyImg.length);
    var rand5 = Math.floor(Math.random()*habitImg.length);        //若图片个数一样，则可只用一个rand2

    food.src = foodImg[rand2];
    exercise.src = exerciseImg[rand3];
    psychology.src = psychologyImg[rand4];
    habit.src = habitImg[rand5];

    setTimeout('timeShow()', 3000);
  }
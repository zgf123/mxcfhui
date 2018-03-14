(function flexible (window, document) {
  var docEl = document.documentElement;

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';

    //解决rem失效问题,zgf添加
    var oBody = document.createElement('body');
    var oDiv = document.createElement('div');
    oDiv.style.width = '10rem';
    oBody.appendChild(oDiv);
    docEl.appendChild(oBody);
    var remWidth = oDiv.offsetWidth;
    docEl.removeChild(oBody);
    if(remWidth != docEl.clientWidth){
      docEl.style.fontSize = rem/remWidth*rem*10 + 'px';
    }
  }
  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}(window, document));


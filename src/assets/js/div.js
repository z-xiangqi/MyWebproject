
// 滑动div
function startMove(iTarget, id, timer) {
    clearInterval(timer);
    const oDiv = document.getElementById(id);
    timer = setInterval(() => {
      const speed = (iTarget - oDiv.offsetLeft) / 8;
      const roundedSpeed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
      if (oDiv.offsetLeft === iTarget) {
        clearInterval(timer);
      } else {
        oDiv.style.left = oDiv.offsetLeft + roundedSpeed + 'px';
      }
    }, 30);
  
    return timer; // 返回计时器
  }
  
  function stopMove(timer) {
    clearInterval(timer);
  }
  
  export { startMove, stopMove };
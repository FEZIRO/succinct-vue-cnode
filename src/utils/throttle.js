/**
 * 函数节流
 * @param {Function} fn 要节流的函数
 * @param {Number} wait 节流时间
 */

export const throttleFn = function(fn,wait){
  let timer;
  return () => {
    if(timer){
      return;
    }

    timer = setTimeout(()=>{
      fn();
      timer = null
    },wait)
  }
}
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
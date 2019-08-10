/**
 * 转换时间为本地格式
 * @param {Date} dateTime 
 * @param {Number} type 
 * type = 1 返回日期
 * type = 2 返回时间
 * type = 3 返回日期和时间
 */
export const getDateTime = function(dateTime,type = 1) {
  let loaclDate = new Date(dateTime).toLocaleDateString();
  let loaclTime = new Date(dateTime).toLocaleTimeString('zh-CN',{ hour12: false})
  let localDateTime = new Date(dateTime).toLocaleString('zh-CN',{ hour12: false})

  switch(type){
    case 1:
      return loaclDate;
    case 2:
      return loaclTime;
    case 3:
      return localDateTime;
  }

}

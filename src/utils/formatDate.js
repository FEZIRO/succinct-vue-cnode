// let dateTime = '2019-06-19T09:33:35.795Z';


export const getDateTime = function(dateTime,type = 1) {
  let loaclDate = new Date(dateTime).toLocaleDateString();
  //let temp = loaclDate.split('/');
  //let loaclDate = `${temp[0]}年${temp[1]}月${temp[2]}日`;
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

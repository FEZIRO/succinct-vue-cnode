// let dateTime = '2019-06-19T09:33:35.795Z';

export const getDate = function(dateTime) {
  let date = dateTime.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g);
  let dateArr = date[0].split('-')
  return `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`
}


import axios from "axios";

const CNODE_API_BASE = 'https://cnodejs.org/api/v1'
const TOPICS = '/topics'

export const requestTopics = function(data) {
  return new Promise((resolve,reject)=>{
    axios
      .get(CNODE_API_BASE+TOPICS,{
        params: data
      })
      .then((res)=>{
        if(res.data.success){
          resolve(res.data.data)
        }else{
          reject(res);
        }
      })
      .catch(e=>{
        console.log('获取TAB_ALL内容失败',e);
        reject(e)
      })
  })
}
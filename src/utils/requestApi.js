import axios from "axios";

const CNODE_API_BASE = 'https://cnodejs.org/api/v1'
const TOPICS = '/topics'
const TOPIC_CONTENT ='/topic/'
const AUTHOR_DATA = '/user/'

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
        console.log('获取TOPICS内容失败',e);
        reject(e)
      })
  })
}

export const requestTopicContent = function(id) {
  return new Promise((resolve,reject)=>{
    axios
      .get(CNODE_API_BASE+TOPIC_CONTENT+id)
      .then((res)=>{
        if(res.data.success){
          resolve(res.data.data)
        }else{
          reject(res);
        }
      })
      .catch(e=>{
        console.log('获取TOPIC_CONTENT内容失败',e);
        reject(e)
      })
  })
}

export const requestAuthorData = function(loginname) {
  return new Promise((resolve,reject)=>{
    axios
      .get(CNODE_API_BASE+AUTHOR_DATA+loginname)
      .then((res)=>{
        if(res.data.success){
          resolve(res.data.data)
        }else{
          reject(res);
        }
      })
      .catch(e=>{
        console.log('获取TOPIC_CONTENT内容失败',e);
        reject(e)
      })
  })
}

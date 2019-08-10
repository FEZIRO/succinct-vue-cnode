import axios from "axios";

const CNODE_API_BASE = 'https://cnodejs.org/api/v1'
const TOPICS = '/topics'
const TOPIC_CONTENT ='/topic/'
const AUTHOR_DATA = '/user/'

/**
 * 请求主题内容列表
 * @param {String} data 主题名 
 */
export const requestTopics = function(topic) {
  return new Promise((resolve,reject)=>{
    axios
      .get(CNODE_API_BASE+TOPICS,{
        params: topic
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

/**
 * 获取文章内容
 * @param {String} id 文章id 
 */
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

/**
 * 获取作者个人信息
 * @param {String} loginname 作者登录名字 
 */
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

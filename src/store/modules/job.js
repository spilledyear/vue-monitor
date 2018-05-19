import {getJobList, addJob, getJobRecord } from '@/api/axios'

const job = {
  state: {
  },

  mutations: {
  },

  actions: {

    /**
     * 获取Job信息
     * @param {*} param0 
     * @param {*} params 
     */
    getJobList({ commit }, params) {
      return new Promise((resolve, reject) => {
        getJobList(params).then(data => {
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    getJobRecord({ commit }, params) {
      return new Promise((resolve, reject) => {
        getJobRecord(params).then(data => {
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    
    addJob({ commit }, data){
      console.log(data)
      return new Promise((resolve, reject) => {
        addJob(data).then(data => {
          resolve(data)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    }
  }
}

export default job

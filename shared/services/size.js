import axios from 'axios'
import Config from '../config'

const Service ={
    add(params = {}){
        return axios.post(Config.apiURL+'size/add', params)
    },
    edit(params = {}){
        return axios.post(Config.apiURL+'size/edit', params)
    },
    delete(params = {}){
        return axios.post(Config.apiURL+'size/delete', params)
    },
    listAll(){
        return axios.get(Config.apiURL+'size/listAll')
    },
    detail(params = {}){
        return axios.post(Config.apiURL+'size/detail', params)
    }
}

export default Service
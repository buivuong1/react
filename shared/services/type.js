import axios from 'axios'
import Config from '../config'

const Service = {
    add(params = {}){
        return axios.post(Config.apiURL+'type/add', params)
    },
    edit(params = {}){
        return axios.post(Config.apiURL+'type/edit', params)
    },
    delete(params = {}){
        return axios.post(Config.apiURL+'type/delete', params)
    },
    listAll(){
        return axios.get(Config.apiURL+'type/listAll')
    },
    detail(params = {}){
        return axios.post(Config.apiURL+'type/detail', params)
    }
}

export default Service
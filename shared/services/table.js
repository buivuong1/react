import axios from 'axios'
import Config from '../config'

const Service = {
    add(params = {}){
        return axios.post(Config.apiURL+'table/add', params)
    },
    edit(params = {}){
        return axios.post(Config.apiURL+'table/edit', params)
    },
    delete(params = {}){
        return axios.post(Config.apiURL+'table/delete', params)
    },
    listAll(){
        return axios.get(Config.apiURL+'table/listAll')
    },
    detail(params = {}){
        return axios.post(Config.apiURL+'table/detail', params)
    }
}

export default Service
import axios from 'axios'
import Config from '../config'

const Service ={
    add(params = {}){
        return axios.post(Config.apiURL+'size/add', params)
    }
}

export default Service
import axios from 'axios'

export function GetTest(params = {}){
    return axios.get('http://jsonplaceholder.typicode.com/posts/'+params.param);
}

export function GetTestChild(params = {}){
    return axios.get('http://jsonplaceholder.typicode.com/posts/2');
}

export function GetTestChildNew(params = {}){
    return axios.get('http://jsonplaceholder.typicode.com/posts/3');
}
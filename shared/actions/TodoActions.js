import request from 'axios'

const API_URL = 'http://localhost:3000/demo.json'

export function getTodos(){
    return {
        type: 'GET_TODOS',
        promise: request.get(API_URL)
    }
}

export function editTodo(id, text){
    return {
        type: 'EDIT_TODO',
        id,
        text,
        date: Date.now()
    }
}
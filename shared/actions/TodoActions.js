import request from 'axios'

const API_URL = 'https://ebtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1'

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
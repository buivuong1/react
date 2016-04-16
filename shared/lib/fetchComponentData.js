import axios from 'axios'

export default function fetchComponentData(components, params) {
    const needs = components.reduce((prev, current) => {
        return current ? (current.needs || []).concat(prev): prev;
    }, [])
    const paramsStr = JSON.stringify(params);
    const paramsIndex = paramsStr.indexOf('.js');
    if(paramsIndex === -1){
        const promises = [];
        needs.map(need => {
            for(let [needKey, needValue] of Object.entries(need)){
                let tempPromise = new Promise((resolve, reject) => {
                    needValue({...params}).then((response)=>{
                        resolve({[needKey]: response.data})
                    })
                })
                promises.push(tempPromise)
            }
        })
        return Promise.all(promises);
    }else{
        return Promise.resolve('no render'); 
    }
}
export default function fetchComponentData(dispatch, components, params) {
    const needs = components.reduce( (prev, current) => {
        return current ? (current.needs || []).concat(prev) : prev;
    }, []);

    const paramsStr = JSON.stringify(params);
    const paramsIndex = paramsStr.indexOf('.js');
    if(paramsIndex === -1){
        const promises = needs.map(need => dispatch(need(params)));
        return Promise.all(promises);
    }else{
        return Promise.resolve('no render'); 
    }
}
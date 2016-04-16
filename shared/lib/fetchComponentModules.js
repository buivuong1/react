import modules from './modules'

export default function fetchComponentModules(components) {
    const m = components.reduce((prev, current) => {
        return current ? (current.modules || []).concat(prev): prev;
    }, [])

    let promises = [];
    m.map(module => {
        promises = promises.concat(modules[module]);
    })
    return Promise.all(promises);
}
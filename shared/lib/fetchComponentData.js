export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce( (prev, current) => {
    console.log
    return current ? (current.needs || []).concat(prev) : prev;
  }, []);

  const promises = needs.map(need => dispatch(need(params)));

  return Promise.all(promises);
}
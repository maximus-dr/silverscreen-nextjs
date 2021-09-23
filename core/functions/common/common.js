const clearURI = (router) => {
    router.replace(router.pathname, undefined, {shallow: true})
}

const parseQuery = (query) => {
    return query.split(' ');
 }

export {
    clearURI,
    parseQuery
}

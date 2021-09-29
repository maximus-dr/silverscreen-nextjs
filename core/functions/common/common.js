const clearURI = (router) => {
    router.replace(router.pathname, undefined, {shallow: true})
}

const parseQuery = (query) => {
    return query.split(' ');
}

const fetchDataList = (fs, path) => {
    const eventsData = fs.readFileSync(path.join(process.cwd(), `db/events/events.json`), 'utf8');
    const events = JSON.parse(eventsData);

    const showsData = fs.readFileSync(path.join(process.cwd(), `db/shows/shows.json`), 'utf8');
    const shows = JSON.parse(showsData);

    const dataList = {
        events,
        shows
    }
    return dataList;
}


export {
    clearURI,
    parseQuery,
    fetchDataList
}

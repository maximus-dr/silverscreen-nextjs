const clearURI = (router) => {
    router.replace(router.pathname, undefined, {shallow: true})
}

const parseQuery = (query) => {
    return query.split(' ');
}

const fetchDataList = (fs, path) => {
    const eventsData = fs.readFileSync(path.join(process.cwd(), `db/data/events/events.json`), 'utf8');
    const events = JSON.parse(eventsData);

    const showsData = fs.readFileSync(path.join(process.cwd(), `db/data/shows/shows.json`), 'utf8');
    const shows = JSON.parse(showsData);

    const dataList = {
        events,
        shows
    }
    return dataList;
}

const updatePageContainers = (dataList, eventId) => {

}

const createNewCard = (card, event) => {

    const updateCardData = (cardElement) => {
        switch (cardElement.role) {
            case 'card':
                cardElement.eventId = event.id;
                break;

            case 'posterLink':
                cardElement.link = `/afisha/${event.id}`
                cardElement.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
                break;

            case 'cardTitle':
                cardElement.value = event.acronym;
                break;

            case 'genreItem':
                cardElement.value = event.genre[0].acronym;
                break;
        }
        const children = cardElement.childrenList;
        if (children && children.length > 0) {
            children.forEach(child => {
                updateCardData(child);
            });
        }
        return cardElement;
    }

    const newCard = updateCardData({...card});
    return newCard;
}


export {
    clearURI,
    parseQuery,
    fetchDataList,
    updatePageContainers,
    createNewCard
}

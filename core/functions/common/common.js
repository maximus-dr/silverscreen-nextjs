import { updateComponentIds } from "../admin/components";

const clearURI = (router) => {
    router.replace(router.pathname, undefined, {shallow: true})
}


const parseQuery = (query) => {
    return query.split(' ');
}


const fetchDataList = (fs, path) => {
    const readData = (url) => {
        const data = fs.readFileSync(path.join(process.cwd(), url), 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData;
    }
    const events = readData(`db/data/events/events.json`);
    const shows = readData(`db/data/shows/shows.json`);
    const dataList = {
        events,
        shows
    }
    return dataList;
}


const createNewCard = (card, event) => {

    const updateCardData = (cardElement) => {
        switch (cardElement.role) {
            case 'card':
                cardElement.eventId = event.id;
                break;

            case 'cardPosterLink':
                cardElement.link = `/afisha/${event.id}`
                cardElement.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
                break;

            case 'cardTitle':
                cardElement.value = event.acronym;
                break;

            case 'cardGenre':
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


const updateComponentData = (component, data, event) => {
    if (!event) {
        event =  data.events[0];
    }

    if (component.role === 'container' && component.childrenList.length > 0) {
        const card = component.childrenList.find(child => child.role === 'card');
        if (card) {
            const cards =  data[component.dataList].map(item => {
                const newCard = createNewCard(JSON.parse(JSON.stringify(card)), item);
                return updateComponentIds(newCard);
            });
            component.childrenList = cards;
        }
    }

    if (event) {
        if (component.role === 'eventTitle') {

            component.value = event.acronym;
        }

        if (component.role === 'poster') {
            component.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
        }

        if (component.role === 'eventBackground') {
            component.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
        }
    }

    if (component.childrenList && component.childrenList.length > 0) {
        component.childrenList.forEach(child => updateComponentData(child, data, event));
    }
}


export {
    clearURI,
    parseQuery,
    fetchDataList,
    updateComponentData,
    createNewCard
}

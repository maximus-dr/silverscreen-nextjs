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
        const eventStart = new Date(event.start);

        switch (cardElement.role) {
            case 'card':
                cardElement.cardId = event.id;
                break;

            case 'cardPosterLink':
                cardElement.link = `/afisha/event?eventId=${event.id}`
                cardElement.styles.common.backgroundImage = `url('` + event.posterLink + `')`;
                break;

            case 'cardTitle':
                cardElement.value = event.acronym;
                break;

            case 'cardGenre':
                cardElement.value = event.genre[0].acronym;
                break;

            case 'cardCinema':
                cardElement.value = event.cinema.acronym;
                break;

            case 'cardCity':
                cardElement.value = event.city.acronym;
                break;

            case 'cardEventStart':
                const eventStartTime = eventStart.toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: 'numeric',
                    minute: 'numeric'
                });
                cardElement.value = eventStartTime;
                break;

            case 'cardEventDate':
                const eventDate = eventStart.toLocaleDateString('en-US');
                cardElement.value = eventDate;
                break;

            case 'cardAuditorium':
                cardElement.value = event.auditorium.acronym;
                break;

            case 'cardTypeVideo':
                cardElement.value = event.typeVideo.acronym;
                break;

            case 'cardTypeAudio':
                cardElement.value = event.typeAudio.acronym;
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


const updateComponentData = (component, data, eventId) => {

    let dataList = component.dataList ? data[component.dataList] : null;
    let event = dataList && eventId
        ? dataList.find(item => item.id === eventId)
        : dataList
            ? dataList[0] : null;

    if (component.role === 'container' &&
        component.childrenList.length > 0) {
        const card = component.childrenList.find(child => child.role === 'card');
        if (card) {
            const cards =  data[component.dataList].map(item => {
                const template = JSON.parse(JSON.stringify(card));
                const newCard = createNewCard(template, item);
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

        if (component.role === 'eventAnnotation') {
            component.value = event.annotation;
        }
    }

    if (component.childrenList && component.childrenList.length > 0) {
        component.childrenList.forEach(child => updateComponentData(child, data, eventId));
    }
}


export {
    clearURI,
    parseQuery,
    fetchDataList,
    updateComponentData,
    createNewCard
}

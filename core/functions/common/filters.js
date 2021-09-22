const groupFilters = (tags) => {
    const result = {}
    tags.forEach(tag => {
        const splitted = tag.split(';');
        const key = splitted[0];

        if (result[key]) {
            result[key].push(tag);
            return;
        }
        if (!result[key]) {
            result[key] = [tag];
            return;
        }
    });
    return result;
}

const filterList = (list, filters) => {
    const result = [];

    list.forEach(item => {
        let match = true;
        for (let category in filters) {
            const hasTag = filters[category].find(tag => {
                return item.filters.includes(tag);
            });

            if (!hasTag) {
                match = false;
                break;
            }
        }
        if (match) {
            result.push(item);
        }
    });
    return result;
}


const filterData = (data, filters) => {
    let result = {};

    for (let list in data) {
        const filtered = filterList(data[list], filters);
        result[list] = filtered;
    }

    return result;
}



export {
    groupFilters,
    filterList,
    filterData
}

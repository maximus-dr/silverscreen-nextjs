const getFilters = (tags) => {
    const filters = {}
    tags.forEach(tag => {
        const splitted = tag.split(';');
        const key = splitted[0];

        if (!filters[key]) {
            filters[key] = [tag];
            return;
        }
        if (filters[key]) {
            filters[key].push(tag);
            return;
        }
    });
    return filters;
}


const filter = (items, filters) => {
    if (Object.keys(filters).length === 0) return items;

    const categories = Object.keys(filters);
    let filtered = [];

    categories.forEach((category, i) => {
        const filterValues = filters[category];

        if (i === 0) {
            items.forEach((item) => {
                const match = filterValues.some(value => {
                    return item.filters.includes(value);
                });
                if (match) {
                    filtered.push(item);
                }
            });
        }

        if (i > 0) {
            filtered = filtered.filter(item => {
                const match = filterValues.some(value => {
                    return item.filters.includes(value);
                });
                return match ? true : false;
            });
        }
    });
    return filtered;
}

export {
    getFilters,
    filter
}

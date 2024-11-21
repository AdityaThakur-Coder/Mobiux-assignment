function popularItems(data) {
    const monthlyItems = {};
    data.forEach((row) => {
        const columns = row.split(',');
        const date = new Date(columns[0]);
        const month = date.toISOString().slice(0, 7); 
        const item = columns[1];
        const quantity = Number(columns[3]); 

        if (!monthlyItems[month]) {
            monthlyItems[month] = {};
        }

        if (!monthlyItems[month][item]) {
            monthlyItems[month][item] = 0;
        }
        monthlyItems[month][item] += quantity;
    });

    const mostPopularItems = {};
    Object.keys(monthlyItems).forEach((month) => {
        const items = monthlyItems[month];
        let maxItem = '';
        let maxQuantity = 0;
        Object.keys(items).forEach((item) => {
            if (items[item] > maxQuantity) {
                maxItem = item;
                maxQuantity = items[item];
            }
        });
        mostPopularItems[month] = { item: maxItem, quantity: maxQuantity };
    });

    return mostPopularItems;
}

module.exports = popularItems;

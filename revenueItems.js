function revenueItems(data) {
    const monthlyRevenue = {};
    data.forEach((row) => {
        const columns = row.split(',');
        const date = new Date(columns[0]);
        const month = date.toISOString().slice(0, 7); 
        const item = columns[1];
        const revenue = Number(columns[4]); 

        if (!monthlyRevenue[month]) {
            monthlyRevenue[month] = {};
        }

        if (!monthlyRevenue[month][item]) {
            monthlyRevenue[month][item] = 0;
        }
        monthlyRevenue[month][item] += revenue;
    });

    const maxRevenueItems = {};
    Object.keys(monthlyRevenue).forEach((month) => {
        const items = monthlyRevenue[month];
        let maxItem = '';
        let maxRevenue = 0;
        Object.keys(items).forEach((item) => {
            if (items[item] > maxRevenue) {
                maxItem = item;
                maxRevenue = items[item];
            }
        });
        maxRevenueItems[month] = { item: maxItem, revenue: maxRevenue };
    });

    return maxRevenueItems;
}

module.exports = revenueItems;

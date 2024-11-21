function popularItemStats(data) {
    const monthlyStats = {};
    data.forEach((row) => {
        const columns = row.split(',');
        const date = new Date(columns[0]);
        const month = date.toISOString().slice(0, 7); 
        const quantity = Number(columns[3]); 

        if (!monthlyStats[month]) {
            monthlyStats[month] = [];
        }

        monthlyStats[month].push(quantity);
    });

    const stats = {};
    Object.keys(monthlyStats).forEach((month) => {
        const quantities = monthlyStats[month];
        const min = Math.min(...quantities);
        const max = Math.max(...quantities);
        const avg = quantities.reduce((sum, q) => sum + q, 0) / quantities.length;
        stats[month] = { min, max, avg };
    });

    return stats;
}

module.exports = popularItemStats;

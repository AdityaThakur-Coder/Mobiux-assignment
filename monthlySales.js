function monthlySales(data) {
    const monthlyTotals = {};
    data.forEach((row) => {
        const columns = row.split(',');
        const date = new Date(columns[0]);
        const month = date.toISOString().slice(0, 7); 
        const total = Number(columns[4]); 

        if (!monthlyTotals[month]) {
            monthlyTotals[month] = 0;
        }
        monthlyTotals[month] += total;
    });
    return monthlyTotals;
}

module.exports = monthlySales;

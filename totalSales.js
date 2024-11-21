function totalSales(data) {
    return data.reduce((sum, row) => {
        const columns = row.split(',');
        return sum + Number(columns[4]); 
    }, 0);
}

module.exports = totalSales;

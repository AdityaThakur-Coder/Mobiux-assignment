const fs = require('fs');
const totalSales = require('./totalSales');
const monthlySales = require('./monthlySales');
const popularItems = require('./popularItems');
const revenueItems = require('./revenueItems');
const popularItemStats = require('./popularItemStats');


const filePath = './mobiux-sales-data.csv';
const rawData = fs.readFileSync(filePath, 'utf-8');
const data = rawData.trim().split('\n').slice(1);


console.log('Total Sales:', totalSales(data));
console.log('Monthly Sales:', monthlySales(data));
console.log('Popular Items:', popularItems(data));
console.log('Revenue Items:', revenueItems(data));
console.log('Popular Item Stats:', popularItemStats(data));

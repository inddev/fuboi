const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeProduct(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const productName = $('#productTitle').first().text().trim();
    // Assuming the brand name is in a span with id 'bylineInfo'
    const brandName = $('#bylineInfo').text().trim();
    // For price, Amazon typically uses a span with id 'priceblock_ourprice'
    const price = $('#priceblock_ourprice').text().trim();
    // Size format might be tricky as it could be anywhere in the product description or title. 
    // Let's assume it's in a specific span with class 'size-format'. You would need to adjust this based on actual HTML structure
    const sizeFormat = $('.size-format').text().trim();

    // Print all information to console for now
    console.log(`Product Name: ${productName}`);
    console.log(`Brand Name: ${brandName}`);
    console.log(`Price: ${price}`);
    console.log(`Size Format: ${sizeFormat}`);
}

scrapeProduct('https://www.amazon.in/dp/B0B7NKDVV4'); 


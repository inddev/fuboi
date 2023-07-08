const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeProduct(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const productName = $('#productTitle').first().text().trim();
    // Assuming the brand name is in a span with id 'bylineInfo'
    const brandName = $('#bylineInfo').text().trim();
    // For price, Amazon typically uses a span with id 'priceblock_ourprice'


    //METADATA BLOCK
    const reviews = $('#averageCustomerReviews').text();

    // PRICE BLOCK
    //let price = $('.a-price');
    const mrp = $('.a-span12').eq(1);
    const prices = $('span.a-price > span.a-offscreen').text();
    //let vat_inc_price = $('a-size-base a-color-price priceblock_vat_inc_price').text();
    //const price = $('#priceblock_ourprice').text().trim();
    // Size format might be tricky as it could be anywhere in the product description or title. 
    // Let's assume it's in a specific span with class 'size-format'. You would need to adjust this based on actual HTML structure
    const sizeFormat = $('.size-format').text().trim();

    // Print all information to console for now
    console.log(`Product Name: ${productName}`);
    //console.log(`Brand Name: ${brandName}`);
    //console.log(`Price: ${price}`);
    console.log(`Reviews: ${reviews}`);
    console.log(`MRP: ${mrp}`);
    console.log(`Prices: ${prices}`);
    //console.log(`Size Format: ${sizeFormat}`);
}

scrapeProduct('https://www.amazon.in/dp/B0B7NKDVV4'); 

// a-price a-text-price a-size-base
// a-size-base a-color-price priceblock_vat_inc_price

// in Cheerio (and jQuery), spaces in selectors indicate a descendant relationship. Make sure to replace spaces with . (dot) for classes in the same element. For example, instead of 'a-price a-text-price a-size-base', it should be 'a-price.a-text-price.a-size-base'. The dot . indicates classes of the same element.

//If the price has multiple classes, you should concatenate them with dots without spaces. So if the HTML element is <span class="a-price a-text-price a-size-base">, you would select it like this: $('.a-price.a-text-price.a-size-base'). Also need to extract the text and clean it up as done for the product and brand names.


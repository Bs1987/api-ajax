const axios = require("axios");

console.log(axios);


async function getCrypto() {
    console.log("LETS MAKE A REQUEST");
    const response = await axios.get("https://api.coincap.io/v2/assets");
    console.log(response.status);
    console.log("REQUEST IS DONE");
}

console.log("HELLO STUDENTS");

getCrypto();

console.log("CRYPTOS ARE COOL");
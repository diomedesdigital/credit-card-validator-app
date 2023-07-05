const express = require('express');
const cors = require('cors');
const Luhn = require('luhn-js'); // luhn algorithm module, for verifying credit card numbers.
const CryptoJS = require("crypto-js");
require("dotenv").config();



const server = express();
const port = 4000;

server.use(express.json());
server.use(cors());

// Routes
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.get('/', (req, res) => {
    res.send('Welcome to the Credit Card Validator Server');
});

// Post encrypted card number to check if it's valid.
server.post('/credit-card', (req, res) => {

    const data = req.body;
    const encryptedCardNumber = data.value;

    // Decrypt the encrypted card number
    const bytes = CryptoJS.AES.decrypt(encryptedCardNumber, process.env.DECRYPRTION_KEY);
    const cardNumber = bytes.toString(CryptoJS.enc.Utf8);

    const isCardValid = luhnValidator(cardNumber);
    res.send(isCardValid);
});

// Code for the Luhn Checksum Validation
function luhnValidator(cardNumber) {
    const digits = cardNumber.length;

    let totalSum = 0;
    let isSecondNumber = false;
    for (let i = digits - 1; i >= 0; i--) {

        let intValue = parseInt(cardNumber[i]);

        if (isSecondNumber == true) {
            intValue = intValue * 2;
        };

        totalSum += parseInt(intValue / 10);
        totalSum += intValue % 10;

        isSecondNumber = !isSecondNumber;
    }
    return (totalSum % 10 == 0);
}
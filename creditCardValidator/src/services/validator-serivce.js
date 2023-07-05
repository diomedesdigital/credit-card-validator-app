import axios from 'axios';
import CryptoJS from "crypto-js";

export const validateCardNumber = async (cardNumber) => {

  // Since credit card number is PII, it should be encrypted. 
  const encryptCardNumber = CryptoJS.AES.encrypt(cardNumber, process.env.REACT_APP_ENCRYPRTION_KEY).toString();

  try {
    const data = {
      value: encryptCardNumber
    };

    const response = await axios.post('http://localhost:4000/credit-card', data);
    const isCardValid = response.data;

    if (isCardValid) {
      return "This is a valid credit card!";
    }
    return "This is not a valid credit card!";
    
  } catch (error) {
    console.error(error);
    throw error; // Throw the error for the caller to handle
  }
};

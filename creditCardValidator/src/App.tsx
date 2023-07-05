import React, { useState, ChangeEvent, FormEvent } from "react";
import { validateCardNumber } from "./services/validator-serivce";

const MyComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const Header = () => {
    return (
      <header>
        <h1>Credit Card Number Validator</h1>
      </header>
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    // Adding regex to make sure that only numerical values are added to input. 
    if (value === "" || /^[0-9]+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const creditCardNumbers = inputValue.length;

    // The smallest a credit card number can be is 8 and largest is 19:
    // Source: https://www.capitalone.com/learn-grow/money-management/what-is-a-credit-card-number/

    const creditCardNumberInRange: Boolean =
      creditCardNumbers > 7 && creditCardNumbers < 20;
    if (creditCardNumberInRange) {
      const result = await validateCardNumber(inputValue);
      alert(result);
    } else {
      alert("A valid credit card has at least 8 digits and at most 19");
    }

    // Reset the input value
    setInputValue("");
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Enter your credit card number above and then click submit (No Spaces)</p>
    </div>
  );
};

export default MyComponent;

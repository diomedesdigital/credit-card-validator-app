# Credit Card Validator App

## How to run the application

In the root of the project run the following. Make sure you are running the latest version of node and npm. 

```bash
cd nodeServer
npm install
```

After the above step is finished, ensure that there’s an .env file in your project, else you can create it. You can use which ever keyname you like, just remember to use it in the react app as well. 

```bash
DECRYPRTION_KEY=creditCardCrypto
```

Once you confirm the .env file is present, and npm installed as expected, you can start the server, by running. 

```bash
npm start
```

Return back to the root, or open a seperate terminal and run the following: 

```bash
cd creditCardValidator
npm install
```

Once that step is complete, ensure that the following .env file is present, otherwise you can create it. Once again the key can be whatever you want, just make sure whichever key name you use, is the same in both places. 

```bash
REACT_APP_ENCRYPRTION_KEY=creditCardCrypto
```

Once you’re completed with step, you should be able to run the following and have a link open to the front-end of the application

```bash
npm start
```

The link should be: [http://localhost:3000](http://localhost:3000/)
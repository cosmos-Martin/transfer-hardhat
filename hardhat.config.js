
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
const dotenv=require("dotenv");
dotenv.config({path:__dirname+'/.env'});

const { API_URL , PRIVATE_KEY }=process.env;

module.exports={
  solidity:{
    version:"0.8.9"
  },
  networks:{
    rinkeby:{
      url: API_URL,
      accounts:[`0x${PRIVATE_KEY}`]
      
    }
    }
  
}


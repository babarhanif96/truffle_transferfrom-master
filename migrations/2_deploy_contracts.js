const Token = artifacts.require('Token.sol');
const HTLC = artifacts.require('HTLC.sol');



module.exports = async function (deployer) {
  const [sender, receipt] = [ '0x9411cB5F6868C8631309F2F5Ab3Bb12Cf31963c4' , '0xB80FC1fa545Aaf2EFddaDa9EEba7Ce1261177DBa'  ];      

  
    await deployer.deploy(Token, 'Token A', 'TKNA', {from:  sender});
    const tokenA = await Token.deployed();


    await deployer.deploy(HTLC, receipt, tokenA.address, 2, {from: sender});
    const htlc = await HTLC.deployed();
   
  
    await tokenA.approve( htlc.address , 2, {from: sender});
    const bal = await tokenA.balanceOf(receipt , {from: sender});
    console.log("balance 1  is" ,  bal.words[0]);

   await htlc.fund({from: sender});
   const ball = await tokenA.balanceOf(receipt , {from: sender});
   console.log("balance 2  is" ,  ball.words[0]);
}

// module.exports = async function (deployer, network, addresses) {
//   const [bob, alice] = addresses;      

//   if(network === 'Rinkeyby') {
//     await deployer.deploy(Token, 'Token A', 'TKNA', {from:  bob});
//     const tokenA = await Token.deployed();
//     await deployer.deploy(HTLC, alice, tokenA.address, 1, {from: bob});
//     const htlc = await HTLC.deployed();
//     await tokenA.approve(htlc.address, 1, {from: bob});
//     await htlc.fund({from: bob});
//   }
//   // if(network === 'binanceTestnet') {
//   //   await deployer.deploy(Token, 'Token B', 'TKNB', {from: alice});
//   //   const tokenB = await Token.deployed();
//   //   await deployer.deploy(HTLC, bob, tokenB.address, 1, {from: alice});
//   //   const htlc = await HTLC.deployed();
//   //   await tokenB.approve(htlc.address, 1, {from: alice});
//   //   await htlc.fund({from: alice});
//   // }
// };
 
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0; 

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract HTLC {
  uint public startTime;
  uint public lockTime = 10000 seconds;
  string public secret; //swapping
  
  address public recipient;
  address public owner; 
  uint public amount; 
  IERC20 public token;

  constructor(address _recipient, address _token, uint _amount) { 
    recipient = _recipient;
    owner = msg.sender; 
    amount = _amount;
    token = IERC20(_token);
  } 

  function fund() external {
    startTime = block.timestamp;
    token.transferFrom(msg.sender,  recipient, amount);
  }

  
}

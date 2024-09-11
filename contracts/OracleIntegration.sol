// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracle {
    function getData() external view returns (uint);
}

contract OracleIntegration {
    IOracle public oracle;

    constructor(address _oracleAddress) {
        oracle = IOracle(_oracleAddress);
    }

    event DataRequested(address indexed requester);
    event DataReceived(uint data);

    function requestData() public {
        uint data = oracle.getData();
        emit DataReceived(data);
    }
}

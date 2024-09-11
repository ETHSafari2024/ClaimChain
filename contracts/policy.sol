// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Policy {
    struct PolicyDetails {
        address policyHolder;
        uint premium;
        uint coverage;
        uint duration;
        uint startTime;
        bool isActive;
    }

    mapping(address => PolicyDetails) public policies;

    event PolicyCreated(address indexed policyHolder, uint premium, uint coverage, uint duration);
    event PremiumPaid(address indexed policyHolder, uint amount);
    event PolicyExpired(address indexed policyHolder);

    function createPolicy(uint _premium, uint _coverage, uint _duration) public payable {
        require(msg.value == _premium, "Incorrect premium payment");

        PolicyDetails memory newPolicy = PolicyDetails({
            policyHolder: msg.sender,
            premium: _premium,
            coverage: _coverage,
            duration: _duration,
            startTime: block.timestamp,
            isActive: true
        });

        policies[msg.sender] = newPolicy;

        emit PolicyCreated(msg.sender, _premium, _coverage, _duration);
    }

    function payPremium() public payable {
        require(policies[msg.sender].isActive, "Policy is not active");
        require(msg.value == policies[msg.sender].premium, "Incorrect premium amount");

        emit PremiumPaid(msg.sender, msg.value);
    }

    function checkPolicyExpiration(address _policyHolder) public {
        PolicyDetails storage policy = policies[_policyHolder];
        require(policy.isActive, "Policy is not active");

        if (block.timestamp >= policy.startTime + policy.duration) {
            policy.isActive = false;
            emit PolicyExpired(_policyHolder);
        }
    }
}

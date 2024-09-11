// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsurancePolicy {
    struct Policy {
        uint256 id;
        string name;
        string coverage;
        uint256 premium;
        bool isActive;
    }

    uint256 public nextPolicyId;
    mapping(uint256 => Policy) public policies;
    mapping(address => uint256[]) public userPolicies;

    event PolicyCreated(uint256 id, string name, string coverage, uint256 premium);
    event PolicyActivated(uint256 id);
    event PolicyDeactivated(uint256 id);
    event PolicyPurchased(address user, uint256 policyId);

    function createPolicy(string memory _name, string memory _coverage, uint256 _premium) public {
        uint256 policyId = nextPolicyId++;
        policies[policyId] = Policy(policyId, _name, _coverage, _premium, true);
        emit PolicyCreated(policyId, _name, _coverage, _premium);
    }

    function activatePolicy(uint256 _policyId) public {
        policies[_policyId].isActive = true;
        emit PolicyActivated(_policyId);
    }

    function deactivatePolicy(uint256 _policyId) public {
        policies[_policyId].isActive = false;
        emit PolicyDeactivated(_policyId);
    }

    function purchasePolicy(uint256 _policyId) public payable {
        require(policies[_policyId].isActive, "Policy is not active");
        require(msg.value >= policies[_policyId].premium, "Insufficient funds");

        userPolicies[msg.sender].push(_policyId);
        emit PolicyPurchased(msg.sender, _policyId);
    }

    function getUserPolicies(address _user) public view returns (uint256[] memory) {
        return userPolicies[_user];
    }
}

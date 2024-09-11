// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsurancePool {
    uint256 public totalBalance;
    mapping(address => uint256) public contributions;
    mapping(address => uint256) public pendingClaims;

    event ContributionMade(address contributor, uint256 amount);
    event ClaimProcessed(address claimant, uint256 amount);

    function contribute() public payable {
        totalBalance += msg.value;
        contributions[msg.sender] += msg.value;
        emit ContributionMade(msg.sender, msg.value);
    }

    function submitClaim(uint256 _amount) public {
        require(contributions[msg.sender] >= _amount, "Insufficient contribution");
        pendingClaims[msg.sender] += _amount;
    }

    function processClaim(address _claimant, uint256 _amount) public {
        require(totalBalance >= _amount, "Insufficient pool balance");
        require(pendingClaims[_claimant] >= _amount, "Claim amount exceeds pending claims");

        totalBalance -= _amount;
        pendingClaims[_claimant] -= _amount;
        payable(_claimant).transfer(_amount);
        emit ClaimProcessed(_claimant, _amount);
    }

    function getTotalBalance() public view returns (uint256) {
        return totalBalance;
    }
}

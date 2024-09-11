// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Claims {
    struct Claim {
        address policyHolder;
        uint claimAmount;
        bool isVerified;
        bool isPaid;
    }

    mapping(address => Claim) public claims;

    event ClaimSubmitted(address indexed policyHolder, uint claimAmount);
    event ClaimVerified(address indexed policyHolder, bool isVerified);
    event ClaimApproved(address indexed policyHolder, uint payoutAmount);
    event ClaimRejected(address indexed policyHolder);

    function submitClaim(uint _claimAmount) public {
        Claim memory newClaim = Claim({
            policyHolder: msg.sender,
            claimAmount: _claimAmount,
            isVerified: false,
            isPaid: false
        });

        claims[msg.sender] = newClaim;

        emit ClaimSubmitted(msg.sender, _claimAmount);
    }

    function verifyClaim(address _policyHolder, bool _isVerified) public {
        Claim storage claim = claims[_policyHolder];
        claim.isVerified = _isVerified;

        emit ClaimVerified(_policyHolder, _isVerified);
    }

    function approveClaim(address _policyHolder) public {
        Claim storage claim = claims[_policyHolder];
        require(claim.isVerified, "Claim is not verified");
        require(!claim.isPaid, "Claim is already paid");

        claim.isPaid = true;
        payable(_policyHolder).transfer(claim.claimAmount);

        emit ClaimApproved(_policyHolder, claim.claimAmount);
    }

    function rejectClaim(address _policyHolder) public {
        Claim storage claim = claims[_policyHolder];
        require(!claim.isVerified, "Claim already verified");

        delete claims[_policyHolder];

        emit ClaimRejected(_policyHolder);
    }
}

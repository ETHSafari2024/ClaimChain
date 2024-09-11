// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Governance {
    struct Proposal {
        string description;
        uint voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => bool) public voted;

    event ProposalCreated(uint proposalId, string description);
    event Voted(address indexed voter, uint proposalId);
    event ProposalExecuted(uint proposalId);

    function createProposal(string memory _description) public {
        proposals.push(Proposal({
            description: _description,
            voteCount: 0,
            executed: false
        }));

        emit ProposalCreated(proposals.length - 1, _description);
    }

    function vote(uint _proposalId) public {
        require(!voted[msg.sender], "You have already voted");
        proposals[_proposalId].voteCount++;
        voted[msg.sender] = true;

        emit Voted(msg.sender, _proposalId);
    }

    function executeProposal(uint _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.executed, "Proposal already executed");
        require(proposal.voteCount > 0, "Not enough votes");

        proposal.executed = true;

        emit ProposalExecuted(_proposalId);
    }
}

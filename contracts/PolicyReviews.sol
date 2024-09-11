// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PolicyReviews {
    struct Review {
        uint256 id;
        uint256 policyId;
        uint8 rating;
        string comment;
    }

    Review[] public reviews;
    uint256 public reviewCounter = 0;

    // Event to emit when a new review is added
    event ReviewAdded(uint256 id, uint256 policyId, uint8 rating, string comment);

    // Function to add a review for a specific policy
    function addReview(uint256 policyId, uint8 rating, string memory comment) public {
        reviews.push(Review(reviewCounter, policyId, rating, comment));
        emit ReviewAdded(reviewCounter, policyId, rating, comment);
        reviewCounter++;
    }

    // Function to get all reviews for a specific policy
    function getReviews(uint256 policyId) public view returns (Review[] memory) {
        uint256 reviewCount = 0;
        for (uint256 i = 0; i < reviews.length; i++) {
            if (reviews[i].policyId == policyId) {
                reviewCount++;
            }
        }

        Review[] memory policyReviews = new Review[](reviewCount);
        uint256 index = 0;
        for (uint256 i = 0; i < reviews.length; i++) {
            if (reviews[i].policyId == policyId) {
                policyReviews[index] = reviews[i];
                index++;
            }
        }

        return policyReviews;
    }
}

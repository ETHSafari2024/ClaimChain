// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityManagement {
    struct User {
        address userAddress;
        bool isRegistered;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed user);

    function registerUser() public {
        require(!users[msg.sender].isRegistered, "User already registered");

        users[msg.sender] = User({
            userAddress: msg.sender,
            isRegistered: true
        });

        emit UserRegistered(msg.sender);
    }

    function isRegistered(address _user) public view returns (bool) {
        return users[_user].isRegistered;
    }
}

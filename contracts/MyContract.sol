// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract MyContract {
    error Nope(address sender);

    function hello() external pure returns (string memory) {
        return "Hello friend";
    }

    function notHello() external view {
        revert Nope(msg.sender);
    }
}

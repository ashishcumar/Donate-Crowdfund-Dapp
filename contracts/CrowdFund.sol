// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CrowdFund {
    // Variables :-
    struct Donate {
        uint256 amount;
        uint256 timestamp;
    }

    address public owner;
    address[] private donorsList;
    mapping(address => Donate[]) private donations;
    mapping(address => bool) private withdrawAccess;

    // Events :-
    event NewDonation(address donor, uint256 amount);
    event WithdrawAccess(address user, uint256 timestamp);
    event RevokeWithdraw(address user, uint256 timestamp);
    event AmountWithdrawal(uint256 amount, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    // modifiers :-
    modifier checkWithDrawAccess() {
        require(
            withdrawAccess[msg.sender] || msg.sender == owner,
            "Only admins can access this function"
        );
        _;
    }

    // functions :-
    function donate(uint256 _amount) external payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        Donate memory newDonation = Donate(_amount, block.timestamp);
        donations[msg.sender].push(newDonation);
        donorsList.push(msg.sender);
        emit NewDonation(msg.sender, _amount);
    }

    function getDonationDetail() external view returns (Donate[] memory) {
        return donations[msg.sender];
    }

    function getAllDonationDetails()
        external
        view
        returns (address[] memory, Donate[] memory)
    {
        uint256 donorsNum = donorsList.length;
        address[] memory donors = new address[](donorsNum);
        Donate[] memory donationsList = new Donate[](donorsNum);

        for (uint256 i = 0; i < donorsNum; i++) {
            donors[i] = donorsList[i];
            donationsList[i] = donations[donorsList[i]][i];
        }

        return (donors, donationsList);
    }

    function authorizeWithdraw(address _user) external {
        withdrawAccess[_user] = true;
        emit WithdrawAccess(_user, block.timestamp);
    }

    function revokeWithdraw(address _user) external {
        withdrawAccess[_user] = false;
        emit RevokeWithdraw(_user, block.timestamp);
    }

    function withdraw() external checkWithDrawAccess {
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "Contract balance is zero");
        payable(msg.sender).transfer(contractBalance);
        emit AmountWithdrawal(contractBalance, block.timestamp);
    }
}

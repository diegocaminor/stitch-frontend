pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//IMPORTS FOR CHAINLINK VRF
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
   

contract Stitch{ //, VRFConsumerV2{
    //VRFCoordinatorV2Interface COORDINATOR;
    //uint64 s_subscriptionId;
    //address vrfCoordinator = 0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed;
    //bytes32 keyHash = 0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f;
    //uint32 callbackGasLimit = 100000;
    //uint16 requestConfirmations = 3;
    //uint32 numWords =  2;
    //uint256[] public s_randomWords;
    //uint256 public s_requestId;
    uint256 public feePool;
    address public admin;
    address payable public winnerAddress;
    

    event NewStreamer(address indexed streamer);
    event DonateStreamer(address indexed streamer, uint256 amount);
    event WithdrawEarnings(address indexed streamer);
    event RunLottery(address indexed streamer, address indexed winner);


    constructor(
            uint256 _feePool, //Porcentaje de la donacion que se va a la bolsa acumulada
            address _admin, // Puede cambiar el fee
            address payable _winnerAddress
            //uint64 subscriptionId //Chainlink VRFv2
            ) public{//VRFConsumerBaseV2(vrfCoordinator) public {
            require(_feePool<100);
            feePool = _feePool;
            admin = _admin;
            winnerAddress = _winnerAddress;
            
            //VRF
            //COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
            //s_subscriptionId = subscriptionId;
        }
    


    struct Streamer{
        address Address;
        uint256 earnings;
        uint256 pool;
        bool registered;
    }


    mapping(address => Streamer ) public profiles; //Streamer Income

    function newStreamer() external {
        require(profiles[msg.sender].registered == false, "Streamer is already registered");
        profiles[msg.sender] = Streamer(msg.sender,0,0,true);
        emit NewStreamer(msg.sender);
    }

    function donateStreamer(address _streamerAddr) external payable{
        Streamer storage streamer =  profiles[_streamerAddr];
        uint256 donationAmount = msg.value;
        uint256 donationToPool = (donationAmount * feePool)/100 ;
        uint256 donationToStreamer = donationAmount - donationToPool ;
        streamer.earnings += donationToStreamer;
        streamer.pool += donationToPool;
        emit DonateStreamer(streamer.Address, donationAmount);
    }

    function changeFee(uint256 _newFee) onlyAdmin(admin) external {
        feePool = _newFee;
    }

    function withdrawEarnings() external{
        require(profiles[msg.sender].registered == true, "Only the owner of this stream can call this function");
        Streamer storage streamer =  profiles[msg.sender];
        uint256 temp = streamer.earnings;
        streamer.earnings = 0;
        payable(streamer.Address).transfer(temp);
        temp = 0;
        emit WithdrawEarnings(streamer.Address);
    }

    function runLottery() external {
        require(profiles[msg.sender].registered == true, "Only the owner of this stream can call this function");
        Streamer storage streamer =  profiles[msg.sender];
        address winner = winnerAddress;
        uint256 prize = streamer.pool;
        streamer.pool = 0;
        winnerAddress.transfer(prize);

        emit RunLottery(streamer.Address, winner);

    } 

    function selectWinner() private returns(address) {
        address winner = winnerAddress;
        return (winner);
    }

    function getStreamerEarnings(address _streamerAddress) public view returns (uint256){
        return(profiles[_streamerAddress].earnings);
    }


    function getStreamerPool(address _streamerAddress) public view returns (uint256){
        return(profiles[_streamerAddress].pool);
    }

    function getStreamerRegistry(address _streamerAddress) public view returns (bool){
        return(profiles[_streamerAddress].registered);
    }

      
    // function requestRandomWords() external onlyAdmin {
    // // Will revert if subscription is not set and funded.
    //     s_requestId = COORDINATOR.requestRandomWords(
    //     keyHash,
    //     s_subscriptionId,
    //     requestConfirmations,
    //     callbackGasLimit,
    //     numWords
    //     );
    // }
// 
    // function fulfillRandomWords(
    //     uint256, /* requestId */
    //     uint256[] memory randomWords) 
    //     internal override {
    //     s_randomWords = randomWords;
    // }


    modifier onlyAdmin(address admin) {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }



}

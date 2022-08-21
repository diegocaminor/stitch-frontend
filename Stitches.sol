pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Modifiers.sol";
   

contract Stitch is Modifiers{

    constructor(
            uint256 _feePool, //Porcentaje de la donacion que se va a la bolsa acumulada
            address _admin, // Puede cambiar el fee
            address payable _winnerAddress
        ) public {
            require(_feePool<100);
            feePool = _feePool;
            admin = _admin;
            winnerAddress = _winnerAddress;
        }
    
    uint256 public feePool;
    address public admin;
    address payable public winnerAddress;

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
    }


    function donateStreamer(address _streamerAddr, uint256 _donationAmount) external payable{
        Streamer storage streamer =  profiles[_streamerAddr];
        uint256 donationAmount = _donationAmount * 1e18;
        require( msg.value == donationAmount, "Send the correct amount");
        uint256 donationToPool = (donationAmount * feePool)/100 ;
        uint256 donationToStreamer = donationAmount - donationToPool ;
        streamer.earnings += donationToStreamer;
        streamer.pool += donationToPool;
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
    }

    function runLottery()  external {
        require(profiles[msg.sender].registered == true, "Only the owner of this stream can call this function");
        Streamer storage streamer =  profiles[msg.sender];
        address winner = winnerAddress;
        uint256 prize = streamer.pool;
        streamer.pool = 0;
        winnerAddress.transfer(prize);

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

}

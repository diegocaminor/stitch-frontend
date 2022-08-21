const PlatziPunksArtifact = {
    address: {
        4: "0x57880D5B70890446eac85C4d852AA585b67B7134",
    },
    abi: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_newFee",
                    "type": "uint256"
                }
            ],
            "name": "changeFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_streamerAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_donationAmount",
                    "type": "uint256"
                }
            ],
            "name": "donateStreamer",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_feePool",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_admin",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "_winnerAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "streamer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "DonateStreamer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "newStreamer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "streamer",
                    "type": "address"
                }
            ],
            "name": "NewStreamer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "runLottery",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "streamer",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "winner",
                    "type": "address"
                }
            ],
            "name": "RunLottery",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "withdrawEarnings",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "streamer",
                    "type": "address"
                }
            ],
            "name": "WithdrawEarnings",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "feePool",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_streamerAddress",
                    "type": "address"
                }
            ],
            "name": "getStreamerEarnings",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_streamerAddress",
                    "type": "address"
                }
            ],
            "name": "getStreamerPool",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_streamerAddress",
                    "type": "address"
                }
            ],
            "name": "getStreamerRegistry",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "profiles",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "Address",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "earnings",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "pool",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "registered",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "winnerAddress",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
};

export default PlatziPunksArtifact;

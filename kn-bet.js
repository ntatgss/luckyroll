window.addEventListener('load', async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
      // Acccounts now exposed
      //web3.eth.sendTransaction({/* ... */});
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    // web3.eth.sendTransaction({/* ... */});
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
});
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3('https://mainnet.infura.io/v3/7a8332feb0eb4e7e9a3fc6ce4e624086');
}

var KNX5abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "contractAddress",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "withdrawToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "withdrawEth",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX10",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Playforfreetoken",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX5",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX2",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX30",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX100",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX50",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "choose_a_number_to_chaos_the_algo",
				"type": "uint256"
			}
		],
		"name": "shake",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Playforbulktoken",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX3",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "PlayX20",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "xtype",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "betvalue",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "win",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "wonamount",
				"type": "uint256"
			}
		],
		"name": "PlayResult",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "make_chaos",
				"type": "bytes32"
			}
		],
		"name": "Shake",
		"type": "event"
	}
];

const KNabi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_unlock","type":"bool"}],"name":"unlockAllTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"addnewOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"founderAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"unlockAllTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"},{"name":"position","type":"uint256"}],"name":"setNewOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"freeze","type":"bool"}],"name":"freezeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"unfrozen","type":"bool"}],"name":"FrozenFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"unlock","type":"bool"}],"name":"UnLockAllTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];

const KNX5Contract = web3.eth.contract(KNX5abi);
const KNX5ContractAdress = '0xFd3fB00FEbdFf5621160E8bE7Fc4079CA325edDd';
const KNX5 = KNX5Contract.at(KNX5ContractAdress);

const KNContract = web3.eth.contract(KNabi);
const KNContractAdress = '0xbfd18F20423694a69e35d65cB9c9D74396CC2c2d';
const KN = KNContract.at(KNContractAdress);

var fromAccount = web3.eth.accounts[0];

var userAccount = web3.eth.accounts[0];

function getBalance () {
  var address, wei, balance
  try {
    web3.eth.getBalance(KNX5ContractAdress, function (error, wei) {
      if (!error) {
        var balance = web3.fromWei(wei, 'ether');
        console.log(balance + ' ETH');
      }
    });
  } catch (err) {
    console.log(err);
  }
}

function approve () {
  KN.approve.sendTransaction(KNX5ContractAdress, 1000000000000000000000000000, function (err, transactionHash) {
    if (!err)
      console.log(transactionHash);
  })
};

function checkapprove (func) {
  var token;
  var from = web3.eth.accounts[0];
  KN.allowance.call(from, KNX5ContractAdress, function (err, tokenallow) {
    if (!err) {
      token = tokenallow.c[0];
      func(token > 0)
      console.log(token);
    }
  });
};

function allowCallBack5 (isAllow) {
  if (isAllow) {
    PlayX5()
  } else {
    approve()
  }
}

function allowCallBack2 (isAllow) {
  if (isAllow) {
    PlayX2()
  } else {
    approve()
  }
}

function PlayX5 () {
  KNX5.PlayX5.sendTransaction({ value: 10000000000000000 }, function (err, transactionHash) {
    if (!err)
      console.log(transactionHash);
  })
};

function PlayX2 () {
  KNX5.PlayX2.sendTransaction({ value: 10000000000000000 }, function (err, transactionHash) {
    if (!err)
      console.log(transactionHash);
  })
};

function Playforfreetoken () {
  KNX5.Playforfreetoken.sendTransaction({ value: 10000000000000000 }, function (err, transactionHash) {
    if (!err)
      console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
  })
};

var playeventrecent = KNX5.PlayResult({fromBlock: 7064301, toBlock: 'latest'});
playeventrecent.watch(function (error, result) {
  if (!error) {
    const args = result.args;
    console.log(result);
    const from = args.player;
    const betValue = parseFloat(args.betvalue.c[0] / 1000).toFixed(4) + ' ETH';
    const isWin = args.win;
    const wonAmount = isWin ? parseFloat(args.wonamount.c[0] / 1000).toFixed(4) + ' ETH' : '';
    const type = args.xtype;
    const link = 'https://etherscan.io/tx/' + result.transactionHash;
    const arrTd = [from, betValue, type, isWin, wonAmount];

    const tr = document.createElement('tr');
    if (isWin) {
      tr.style.background = '#C3E6CB';
    } else {
      tr.style.background = '#F5C6CB';
    }
    arrTd.forEach((item, index) => {
      const td = document.createElement('td');
      const textNode = document.createTextNode(item);
      td.appendChild(textNode);
      if (index === 4 && type === 'freetoken') {
        td.appendChild(document.createTextNode('+200KN'))
      }
      tr.appendChild(td);
    });
    const td = document.createElement('td');
    const a = document.createElement('a');
    a.href = link;
    a.innerText = 'Info';
    td.appendChild(a);
    tr.appendChild(td);
    const table = document.getElementById('result-table');
    table.prepend(tr);

  }
});

var playevent = KNX5.PlayResult();
playevent.watch(function (error, result) {
  if (!error) {
    const args = result.args;
    console.log(result);
    const from = args.player;
    const betValue = parseFloat(args.betvalue.c[0] / 1000).toFixed(4) + ' ETH';
    const isWin = args.win;
    const wonAmount = isWin ? parseFloat(args.wonamount.c[0] / 1000).toFixed(4) + ' ETH' : '';
    const type = args.xtype;
    const link = 'https://etherscan.io/tx/' + result.transactionHash;
    const arrTd = [from, betValue, type, isWin, wonAmount];

    const tr = document.createElement('tr');
    if (isWin) {
      tr.style.background = '#C3E6CB';
    } else {
      tr.style.background = '#F5C6CB';
    }
    arrTd.forEach((item, index) => {
      const td = document.createElement('td');
      const textNode = document.createTextNode(item);
      td.appendChild(textNode);
      if (index === 4 && type === 'freetoken') {
        td.appendChild(document.createTextNode('+200KN'))
      }
      tr.appendChild(td);
    });
    const td = document.createElement('td');
    const a = document.createElement('a');
    a.href = link;
    a.innerText = 'Info';
    td.appendChild(a);
    tr.appendChild(td);
    const table = document.getElementById('result-table');
    table.prepend(tr);

  }
});

//KNX5.playX5.send("1000", function(err, result) => { console.log(result) });

//web3.eth.sendTransaction({to:Contractaddress, from:Accountaddress, data: getData});

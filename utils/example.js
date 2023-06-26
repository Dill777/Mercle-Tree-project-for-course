const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

// find the proof that norman block is in the list 
const name = 'Denys Leshchenko';
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);

// verify proof against the Merkle Root
console.log( "The name in the list: " + verifyProof(proof, name, root) ); // true

const nameWrong = 'Wrong Name';
const indexWN = niceList.findIndex(n => n === nameWrong);
const proofWN = merkleTree.getProof(indexWN);

console.log( "The name in the list: " + verifyProof(proofWN, nameWrong , indexWN));

const proofNew = merkleTree.getProof(index+2);

console.log( "Test with incorrect index : " + verifyProof(proofNew, name, root) );

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
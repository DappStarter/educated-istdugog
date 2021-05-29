require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remember common inner casual flush tattoo'; 
let testAccounts = [
"0x8e79599962dfac069f4d0b1dae49e9d80c38ff16a1eab3ce68e4a142b873c0fc",
"0xbbb91199c92a7497ceeb3f8706db839b20e5f0c8b8b9d51588191a4f59eb2dbf",
"0xe94793d17ce8ec224fd889d392bb8bd2badff3d19c47f796bb8586cf0dc1de1c",
"0x3122c8d8c220f43c0533d0b3b719ec5864e88160e1319d1b787d94ffa089e26f",
"0x19b2d27cb064fcc380aa266fb3f7f8ff9139d5fcf370e1fc225fa0960458c272",
"0x82cbdb90b54c2072eb576589f1b3daca5cee0365ed97baff65e6b7e9c6ccc0b0",
"0xc92c62524998f83632dd7b55538eeed57c14615c5b6301a341a8aa0a507ded73",
"0x12fda08f4309d3c239aefc87bfe984a75f0a553a0650ff4a4ab1611a1d68d523",
"0xf94ab9d42a1a9efab274148d4c688e8491b1cbe9df55a73d03230f67925c8ad9",
"0x87bcc7fb60c3e85dbef51ad15eb83b2f692380e698299f0a89ee839f5c1b77ff"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



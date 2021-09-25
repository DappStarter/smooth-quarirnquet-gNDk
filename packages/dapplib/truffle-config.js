require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard reward stereo comic harvest nature ordinary tuna'; 
let testAccounts = [
"0x0eaaf981893fe0bf6a5d7f0df5728dec4386c56a65c6871aa3aa98323de7795d",
"0xff7e3faa24422c908c418d19721299346972ab8a426949d98c2ee5f6acc20207",
"0x079199ace8ed463f9320cfa004483c30e5b749130a226f2ac1442aefa884ff7d",
"0xb667bb1890fc4ca39362d89133b372b8996746acfe1390349102cc134106401f",
"0xd51be532b5e3aeb32e7b103faa95fc7038d1418456f83e9f2939061655e2d0b4",
"0xca4790ddd101e8b6edc26b0460b5fdd68931fee06e212cea86f96af3628553f4",
"0x667edd6ec139154bdae544bb52311966df1581da4f353f7564c8311adb0bc1e0",
"0x13316d02bfd78cb27446b7816f213c28ebbb90d26350d2470c781cb8c74920f7",
"0xe48762a1ed35beccb635ffcd44ba40da7857a2125b0d19eeb2f3881e0c8d72f4",
"0xce23ab001944e1d6b9c3d96ea784a9c6135a8f697f3e6badff051ae44eaa9679"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


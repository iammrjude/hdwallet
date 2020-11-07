const AmpleForth = artifacts.require("AmpleForth");
const AmpleTokensale = artifacts.require("AmpleTokensale");
// const JudeToken = artifacts.require("JudeTokenSale");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(AmpleForth);
    deployer.deploy(AmpleTokensale);
}
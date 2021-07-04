const AvastarTeleporter = artifacts.require("./AvastarTeleporter.sol");
const AvastarMetadata = artifacts.require("./AvastarMetadata.sol");
const AvastarPrimeMinter = artifacts.require("./AvastarPrimeMinter.sol");
const AvastarReplicantMinter = artifacts.require("./AvastarReplicantMinter.sol");
const constants = require("../util/Constants");
const AccountManager = require("../util/AccountManager");
const BN = require('bn.js');

module.exports = (deployer, network, liveAccounts) => {
    deployer.then(async () => {

        //const generation = new BN(constants.GENERATION.ONE, 10);
        const environment = AccountManager.getEnvByNetwork(network);
        const currentAdmin = liveAccounts[0];
        const accounts = AccountManager.getAccounts(environment);
        const {owners, minters} = accounts;
        const admins = accounts.admins.filter(acct => acct.toUpperCase() !== currentAdmin.toUpperCase());
        let promises;

        // Deploy the Avastar Teleporter, Prime Minter, and Metadata contracts
        console.log("Deploying contracts...");
        const avastarTeleporter = await deployer.deploy(AvastarTeleporter, {overwrite: false});
        //const avastarPrimeMinter = await deployer.deploy(AvastarPrimeMinter, {overwrite: false});
        //const avastarMetadata = await deployer.deploy(AvastarMetadata, {overwrite: false});
        const avastarReplicantMinter = await deployer.deploy(AvastarReplicantMinter);

/*

        // Prepare the Avastar Metadata contract for use
        console.log("----------------------------------");
        console.log("Preparing AvastarMetadata contract");
        console.log("----------------------------------");
        console.log("Set teleporter contract address");
        await avastarMetadata.setTeleporterContract(avastarTeleporter.address);

        console.log("Set Token URI Base");
        await avastarMetadata.setTokenUriBase(constants.TOKEN_URI_BASE[environment]);

        console.log("Set View URI Base");
        await avastarMetadata.setViewUriBase(constants.VIEW_URI_BASE[environment]);

        console.log("Set Media URI Base");
        await avastarMetadata.setMediaUriBase(constants.MEDIA_URI_BASE[environment]);

        console.log("Add admins");
        promises = admins.map( admin => avastarMetadata.addSysAdmin(admin));
        await Promise.all(promises);

        console.log("Unpause\n");
        await avastarMetadata.unpause();

        // Prepare the Avastar Teleporter contract for use
        console.log("------------------------------------");
        console.log("Preparing AvastarTeleporter contract");
        console.log("------------------------------------");

        console.log("Add admins, owners, minters");
        promises = admins.map(admin => avastarTeleporter.addSysAdmin(admin));
        promises.concat(owners.map(owner => avastarTeleporter.addOwner(owner)));
        promises.concat(minters.map(minter => avastarTeleporter.addMinter(minter)));
        await Promise.all(promises);

        await avastarTeleporter.pause(); // remove me

        console.log("Set metadata contract address");
        await avastarTeleporter.setMetadataContractAddress(avastarMetadata.address);
        console.log("Unpause\n");
        await avastarTeleporter.unpause();

        // Prepare the Avastar Prime Minter contract for use
        console.log("-------------------------------------");
        console.log("Preparing AvastarPrimeMinter contract");
        console.log("-------------------------------------");

        console.log("Set teleporter contract address");
        await avastarPrimeMinter.setTeleporterContract(avastarTeleporter.address);

        console.log("Add admins, owners, minters");
        promises = admins.map(admin => avastarPrimeMinter.addSysAdmin(admin));
        promises.concat(owners.map(owner => avastarPrimeMinter.addOwner(owner)));
        promises.concat(minters.map(minter => avastarPrimeMinter.addMinter(minter)));
        await Promise.all(promises);

        console.log("Set current generation");
        await avastarPrimeMinter.setCurrentGeneration(generation); // auto resets sets series

        console.log("Unpause\n");
        await avastarPrimeMinter.unpause();


*/
        // Prepare the Avastar Replicant Minter contract for use
        console.log("-----------------------------------------");
        console.log("Preparing AvastarReplicantMinter contract");
        console.log("-----------------------------------------");

        console.log("Set teleporter contract address");
        await avastarReplicantMinter.setTeleporterContract(avastarTeleporter.address);

        console.log("Add admins, owners, minters");
        promises = admins.map(admin => avastarReplicantMinter.addSysAdmin(admin));
        promises.concat(owners.map(owner => avastarReplicantMinter.addOwner(owner)));
        promises.concat(minters.map(minter => avastarReplicantMinter.addMinter(minter)));
        await Promise.all(promises);

        console.log("Unpause\n");
        await avastarReplicantMinter.unpause();

    });
};

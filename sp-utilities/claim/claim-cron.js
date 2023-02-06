const claimFuncs = require("./claim.js");
const CronJob = require('cron').CronJob;

const SP_OWNER_WALLET = "0x4e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e";
const PK = "0x4e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e";

const job = new CronJob(
	'* * * * * *',
	async function() {
		console.log('You will see this message every second');

        await claimFuncs.claimRewards(
            SP_OWNER_WALLET,
            PK,
            {
                ethRegistryAddress: claimFuncs.defaultRegistryAddress,
                ethTokenAddress: claimFuncs.defaultTokenAddress,
                web3Provider: claimFuncs.defaultWeb3Provider
            }
        )
	},
	null,
	true,
	'America/Los_Angeles'
);

// cd sp-utilities; nvm use 16; npm install
// nvm use 16, node claim-cron.js
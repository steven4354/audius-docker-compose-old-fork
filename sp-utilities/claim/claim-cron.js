const claimFuncs = require("./claim.js");
const CronJob = require('cron').CronJob;

const SP_OWNER_WALLET = "0x61A1BC089f87F1C0e38A34207D65077484d89088";
const PK = "0x4e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e";

const job = new CronJob(
	'0 * * * *',
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
// nvm use 16; node claim-cron.js
// screen -ls to see all the screens
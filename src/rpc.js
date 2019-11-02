const config = require("./config.js")
const clientId = config.clientId
const client = require('discord-rpc')
const fetch = require("node-fetch")
const startTimestamp = new Date();
const rpc = new client.Client({
    transport: 'ipc'
});


const getTrees = async () => {
    const fetchedData = await fetch("https://teamtrees.org/")
    const textData = await fetchedData.text()
    let index = await textData.search("data-count=\"")
    index = index + 12
    let trees = "";
    for (index; true; index++) {
        if (!isNaN(textData[index])) {
            trees = trees + textData[index]
        } else {
            trees = Number(trees)
            return trees.toLocaleString('en')
        }
    }
}


async function setActivity() {
    if (config.ShowTimeStamp == "yes") {
        rpc.setActivity({
            details: `${await getTrees()} trees planted!`,
            state: "https://teamtrees.org",
            startTimestamp,
            largeImageKey: "logo",
            largeImageText: 'teamtrees.org',
            smallImageKey: "github",
            smallImageText: "Credits to https://git.io/Jeg81"
        });
    } else {
        rpc.setActivity({
            details: `${await getTrees()} trees planted!`,
            state: "https://teamtrees.org",
            largeImageKey: "logo",
            largeImageText: 'teamtrees.org',
            smallImageKey: "github",
            smallImageText: "Credits to https://git.io/Jeg81"
        });
    }
}


rpc.on('ready', () => {
    if (config.log == "yes") {
        console.log("Connected!")
    }
    setActivity();
    setInterval(() => {
        setActivity();
    }, 30000);
});

rpc.login({
    clientId
}).catch(console.error);
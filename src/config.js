const getConfig = () => {

    const fs = require("fs")
    const path = require('path');
    if (!fs.existsSync(path.join(__dirname, "..", "config.json"))) {
        console.error("You forgot to add the config file. Check https://github.com/DedShotTM/DiscordTeamTrees#Setup")
        process.exit(1)
    }

    const userConfig = require("../config.json")
    const userConfigArray = Object.keys(userConfig)

    const defaultConfig = {
        "ShowTimeStamp": "yes",
        "log": "yes"
    }

    //Check the required config
    const requiredConfig = ["clientId"]

    for (x of requiredConfig) {
        if (!userConfig[x]) {
            console.error(`Missing ${x} in config.json`)
            process.exit(1)
        }
    }

    //Make sure the regular config is here and set the default config if needed
    for (x of userConfigArray) {
        if (!userConfig[x]) {
            userConfig[x] = defaultConfig[x]
        }
    }
    return userConfig
}

module.exports = getConfig()
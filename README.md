# Discord 🌲 #Team Trees Rich Presence
This application will display the number of trees planted by https://teamtrees.org/ in your Discord rich presence.


## Table of contents
- [Features](#Features)
- [Setup](#Setup)
- [Configuration options](#Configuration-options)
- [License](#License)

## Features
* Verification system
  * Check your version of NodeJs and your NPM modules.
  * Automatic Installation of the needed NodeJs modules.
  * Automatic use of the default configuration if you do not fill in a parameter.
* Customization
  * You can choose to enable or disable the option that allows you to see the time elapsed since your connection to the rich presence.
  * Choose if you want or don't want to have a message when the application connects to discord.

## Setup
1. Install [Node.js 8 or newer](https://nodejs.org).
1. Clone the [source code](https://github.com/DedShotTM/DiscordTeamTrees/archive/master.zip).
1. Make a copy of the file `config.example.json` and name it `config.json`. Open the file and fill in the values.
1. Create your application [here](https://discordapp.com/developers/applications) and name it `🌲 #TeamTrees`. Copy your Client ID and put it in 
`config.clientId`.
1. Go to your application in Discord's devs portal, set the app icon to `logo.png`, then go to Rich Presence and upload these two assets : `github.png` and `logo.png`.
1. Start the bot with `node src/TeamTrees.js` in your command prompt. The node modules should be installed automatically, if they don't, run `npm install`.

## Configuration options
|Option|Default|Required|Description|
|------|-------|--------|-----------|
|clientId|None|Yes|Your client ID.|
|ShowTimeStamp|"yes"|No|Set it to "yes" if you want to see the time elapsed.|
|log|"yes"|No|Will log something to the console when the application is connected.|

## License
DiscordTeamTrees - Copyright (C) 2019  DedShotTM

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see the [License](https://github.com/DedShotTM/DiscordTeamTrees/blob/master/LICENSE).
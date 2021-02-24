"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDiscordApp = void 0;
const discord_1 = require("@typeit/discord");
const config_1 = require("./config");
async function startDiscordApp() {
    uk_london();
}
exports.startDiscordApp = startDiscordApp;
async function uk_london() {
    const time_zone_london_client = new discord_1.Client({
        classes: [
            `${__dirname}/*.ts`,
            `${__dirname}/*.js`
        ],
        silent: false,
        variablesChar: ':',
        partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    });
    await time_zone_london_client.login(config_1.DISCORD_BOT_TOKEN_UK_LONDEN);
    await time_zone_london_client.user.setPresence({
        status: "online",
        activity: {
            name: `UK-Londen`,
            type: "PLAYING"
        }
    });
}
//# sourceMappingURL=bot.js.map
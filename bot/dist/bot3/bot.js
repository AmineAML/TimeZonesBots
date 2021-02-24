"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDiscordApp = void 0;
const discord_1 = require("@typeit/discord");
const config_1 = require("./config");
async function startDiscordApp() {
    us_east();
}
exports.startDiscordApp = startDiscordApp;
async function us_east() {
    const time_zone_us_east_client = new discord_1.Client({
        classes: [
            `${__dirname}/*.ts`,
            `${__dirname}/*.js`
        ],
        silent: false,
        variablesChar: ':',
        partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    });
    await time_zone_us_east_client.login(config_1.DISCORD_BOT_TOKEN_US_EAST);
    await time_zone_us_east_client.user.setPresence({
        status: "online",
        activity: {
            name: `US-East`,
            type: "PLAYING"
        }
    });
}
//# sourceMappingURL=bot.js.map
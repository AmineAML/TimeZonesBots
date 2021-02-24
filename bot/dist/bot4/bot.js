"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDiscordApp = void 0;
const discord_1 = require("@typeit/discord");
const config_1 = require("./config");
async function startDiscordApp() {
    au_sydney();
}
exports.startDiscordApp = startDiscordApp;
async function au_sydney() {
    const time_zone_au_sydney_client = new discord_1.Client({
        classes: [
            `${__dirname}/*.ts`,
            `${__dirname}/*.js`
        ],
        silent: false,
        variablesChar: ':',
        partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    });
    await time_zone_au_sydney_client.login(config_1.DISCORD_BOT_TOKEN_AU_SYDNEY);
    await time_zone_au_sydney_client.user.setPresence({
        status: "online",
        activity: {
            name: `AU-Sydney`,
            type: "PLAYING"
        }
    });
}
//# sourceMappingURL=bot.js.map